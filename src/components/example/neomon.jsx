"use client";
import { useState } from "react";
import Image from "next/image";

import noemonMainImg from "../../../public/img/example/noemon/noemonMainPage.jpg";
import noemonServicesImg from "../../../public/img/example/noemon/noemonServices.jpg";
import noemonItSolutionImg from "../../../public/img/example/noemon/noemonItSolution.jpg";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";


const imgStyle =
  "sm:w-[300px] sm:h-[200px] md:w-[380px] md:h-[340px] desk:w-[600px] desk:h-[500px] sm:my-4  rounded-lg";

  const divContainerStyle = "md:w-[380px] md:h-[340px] desk:w-[600px] desk:h-[500px] sm:my-2 md:my-4 desk:my-10"
  
  const linkStyle = "border-[1px] border-textContacts px-4 py-2 w-2/5 rounded-md text-center cursor-pointer hover:scale-125 hover:border-[#fb923c]"

const CarShipping = () => {
    const t = useTranslations("For example");
    const currentLocation = useLocale()

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(t('About'));
  console.log(setProjectName)

  

  const projectPoint = [
    "- Frontend-Next.js",
    "- Backend-Node.js",
    t("productPointSix"),
    t("productPointSeven"),
    t("productPointEight"),
    t("productPointNine"),
    t("productPointTen"),
  ];

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-wrap justify-around">
      <div className={divContainerStyle} >
        <Image
          src={noemonMainImg}
          alt="Car Anketa"
          width={400}
          height={400}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={noemonServicesImg}
          alt="Car Main"
          width={600}
          height={400}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={noemonItSolutionImg}
          alt="Car Calculator"
          width={400}
          height={400}
          className={imgStyle}
        />
      </div>

      <div className="flex flex-col sm:w-[400px]  desk:w-[600px] ">
        <div onClick={toggleList} className="text-3xl pb-4 mt-12 mx-auto">
          <div className="border-none sm:text-lg md:text-xl desk:text-3xl text-textContacts rounded-lg py-2 px-4 shadow-custom cursor-pointer text-center w-full bg-bgColor hover:scale-125">
            {projectName}
          </div>

          {isOpen && (
            <ul className="transition-all duration-300 ease-in-out mt-2">
              <li>
                <p className=" sm:text-[18px] md:text-[22px] desk:text-2xl font-bold my-2">{t('nameProductTwo')}</p>
              </li>
              {projectPoint.map((item, index) => (
                <li
                  key={index}
                  className="pl-5 px-2 py-[4px] mt-2 sm:text-[14px] md:text-[18px] desk:text-xl bg-secondaryBG"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-row justify-around mt-6">
            <Link href={`/${currentLocation}/mainPage#contact`} className={linkStyle} >{t('btmPurchase')} 1100 <span>{t('current')}</span></Link>
            <Link href={`/${currentLocation}/mainPage#contact`} className={linkStyle}>{t('btmPurchase')} 90 <span>{t('currentRent')}</span></Link>
          </div>
      </div>
      
    </div>
  );
};

export default CarShipping;
