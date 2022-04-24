import * as React from 'react';
import NextImage from 'next/image';
import { ImageProps } from 'next/dist/client/image';
import classNames from 'classnames';

type Props = {
  src: string;
  //resolution of the source file
  trueWidth: number;
  trueHeight: number;

  //desired height/width
  width?: number | string;
  height?: number | string;
  //specify whether the height or width value should be used to size the image. Useless unless both width and height are specified. Default: height.
  resizeBy?: 'height' | 'width';
} & Partial<ImageProps>;
export const Image = (props: Props) => {
  const resizeBy = props.resizeBy || (props.height ? 'height' : 'width');
  if (!props[resizeBy]) throw new Error('either height or width have to be specified');

  const height = parseDimension(props.height);
  const width = parseDimension(props.width);
  const suffix = resizeBy == 'height' ? height.suffix : width.suffix;

  const renderedWidth = resizeBy == 'width' ? width.value : props.trueWidth / (props.trueHeight / height.value);
  const renderedHeight = resizeBy == 'height' ? height.value : props.trueHeight / (props.trueWidth / width.value);
  return (
    <div className={classNames(props.className, 'relative')} style={{ height: `${renderedHeight}${suffix}`, width: `${renderedWidth}${suffix}` }}>
      <NextImage src={props.src} layout={'fill'} />
    </div>
  );
};

/**
 * parses a height/value into a object that is easier to handle
 * Examples:
 *  24 -> {value: 24, suffix: ''}
 *  "24rem" -> {value: 24, suffix: 'rem'}
 * @param value the value to be parsed
 */
function parseDimension(value: number | string | undefined): { value: number; suffix: string } {
  if (value == undefined) return { value: 0, suffix: '' };
  if (typeof value == 'number') return { value, suffix: '' };
  //^\d+((\.|,)\d+)?$
  let split = value.split(/(\d+)/).filter(el => el != ''); //should have format [number, string | undefined]
  if (split.length == 0) throw new Error('height/width cannot be 0');
  if (isNaN(Number(split[0]))) throw new Error('height/width have to begin with a number');
  if (split.length > 2) throw Error("width/height has to be a number or have the format '\\d+\\w*'");
  return { value: Number(split[0]), suffix: split[1] ?? '' };
}
