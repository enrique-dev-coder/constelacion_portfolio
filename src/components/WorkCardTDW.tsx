import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Wrapper from './WorkCardComponents/Wrapper';
import LinkContainer from './WorkCardComponents/LinkContainer';
import CardTitle from './WorkCardComponents/CardTitle';
interface WorkCardProps {
  title: string;
  instaLink: string;
  instaName: string;
  webLink: string;
  bgColor: string;
  logo: StaticImageData | string;
  celImg: StaticImageData | string;
  pcImg: StaticImageData | string;
  features: Array<string>;
  cellPhoneImgRight: Boolean;
}

const WorkCard = ({
  title,

  celImg,
  pcImg,
  instaLink,
  instaName,
  webLink,
  features,
}: WorkCardProps) => {
  return (
    <Wrapper>
      {/*title*/}
      <CardTitle title={title} />

      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8 sm:gap-2`}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-orange-400  to-orange-300  `}
        >
          <div className=" mx-auto">
            <Image src={celImg} alt="" className="w-full h-full " />
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between sm:col-span-8">
          <div
            className={`shadow-md bg-gradient-to-l  from-orange-400  to-orange-300 rounded-3xl flex  justify-center items-center p-4 sm:hidden`}
          >
            <Image src={pcImg} alt="" className="w-full  sm:hidden " />
          </div>
          <div className="w-full flex order-2 h-full">
            <div className="  flex flex-col justify-between sm:gap-4">
              <div className="h-full flex items-center">
                {/*features*/}
                <ul className=" list-disc px-8 rounded-3xl  font-medium shadow-md py-3  text-xl bg-orange-100  sm:text-sm sm:px-0 sm:pl-6">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {/*links container*/}

              <LinkContainer
                bgColor="from-orange-200  to-orange-300  hover:from-orange-300 hover:to-orange-200"
                instaLink={instaLink}
                instaName={instaName}
                webLink={webLink}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WorkCard;
