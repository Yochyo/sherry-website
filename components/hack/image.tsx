import NextImage from 'next/image';

import * as React from 'react';
import styles from './image.module.scss';
import { ImageProps } from 'next/dist/client/image';

type Props = {
  src: string;
  className?: string;
  height: string | number;
} & Partial<ImageProps>;
const Image = ({ src, className, height, ...rest }: Props) => {
  return (
    <div className={`${styles._imageContainer} ${className ?? ''}`} style={{ height: height }}>
      <NextImage className={styles._image} layout="fill" src={src} {...rest} />
    </div>
  );
};

export default Image;
