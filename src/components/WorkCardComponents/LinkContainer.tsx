import React from 'react';
import { InstaIcon, LinkIcon } from '../Icons';

interface LinkContainerProps {
  bgColor: string;
  instaLink: string;
  instaName: string;
  webLink: string;
  IconColor?: string;
  TextColor?: string;
}

const LinkContainer = ({
  bgColor,
  instaLink,
  instaName,
  webLink,
  IconColor = 'fill-black',
  TextColor = 'text-black',
}: LinkContainerProps) => {
  return (
    <div className="flex items-center  justify-between sm:flex-col sm:gap-2">
      {/*insta*/}
      <a
        href={instaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-full"
      >
        {/* from-orange-200  to-orange-300  hover:from-orange-300 hover:to-orange-200  */}

        <div
          className={`flex items-center gap-2  bg-gradient-to-r   shadow-md   rounded-3xl p-4
            ${bgColor}
            transition-all duration-500  sm:p-2`}
        >
          <InstaIcon className={`${IconColor}`} width={25} />
          <p
            className={`${TextColor}
          text-xl font-semibold sm:text-base`}
          >
            @{instaName}
          </p>
        </div>
      </a>
      {/*web*/}
      <a
        href={webLink}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-full"
      >
        <div
          className={`flex items-center gap-2  bg-gradient-to-r   shadow-md   rounded-3xl p-4
            ${bgColor}
            transition-all duration-500  sm:p-2`}
        >
          <LinkIcon className={`${IconColor}`} width={30} />
          <p
            className={`${TextColor}
          text-xl font-semibold  underline underline-offset-1 sm:text-base
          `}
          >
            {webLink}
          </p>
        </div>
      </a>
    </div>
  );
};

export default LinkContainer;
