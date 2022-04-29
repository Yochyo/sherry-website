import * as React from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

type Props = {
  src?: string;
  onClick: () => void;
};
export const GalleryPopover = (props: Props) => {
  return (
    <Transition.Root show={props.src != undefined} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={props.onClick}>
        <div className="flex min-h-screen items-start justify-center text-center sm:block sm:p-0" onClick={props.onClick}>
          {/* background */}
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className="relative inline-block h-screen min-w-full p-2 sm:p-4 lg:p-8">
              <div className="relative h-full items-center justify-center">
                {props.src != undefined ? <Image src={props.src} layout={'fill'} objectFit={'contain'} alt={'image'} /> : <div />}
                <div className="flex flex-row-reverse">
                  <XIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
