"use client";
import { useState } from "react";
import Image from "next/image";

import glowMainImg from "../../../public/img/example/glowoasis/glowMain2.jpg";
import glowProdFilterImg from "../../../public/img/example/glowoasis/glowMain.jpg";
import glowAdminPanelImg from "../../../public/img/example/glowoasis/photoMob.jpg";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const imgStyle =
  "sm:w-[300px] sm:h-[200px] md:w-[380px] md:h-[340px] desk:w-[600px] desk:h-[500px]   rounded-lg";

  const imgMobStyle =
  "sm:w-[300px]  md:w-[200px]  md:h-[400px] desk:w-[300px]  desk:h-[600px] sm:my-4 md:text-center desk:text-start rounded-lg text-secondaryBG mx-auto";


const divContainerStyle =
  "md:w-[380px] md:h-[340px] desk:w-[600px] desk:h-[600px] sm:my-2 md:my-4 desk:my-10";
const linkStyle =
"border-[1px] border-textContacts px-4 py-2 w-2/5 rounded-md text-center sm:text-[14px] md:text-lg desk:text-xl cursor-pointer hover:scale-125 hover:border-[#fb923c]"

const CarShipping = () => {
  const t = useTranslations("For example");
  const currentLocation = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(t("About"));
  console.log(setProjectName);

  const projectPoint = [
    "Frontend-Next.js",
    "Backend-Node.js",
    t("productPointEleven"),
    t("productPointTwelve"),
    t("productPointThirteen"),
    t("productPointFourteen"),
    t("productPointFifteen"),
    t("productPointSixteen"),
  ];

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-wrap justify-around w-[90%] mx-auto">
      <div className={divContainerStyle}>
        <Image
          src={glowMainImg}
          alt="Car Anketa"
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={glowProdFilterImg}
          alt="car1"
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={glowAdminPanelImg}
          alt="car2"
          width={400}
          height={400}
          className={imgMobStyle}
        />
      </div>

      {/* For pic */}

      <div className="flex flex-row sm:w-[400px]  desk:w-[600px] my-10">
       
        <div
          onClick={toggleList}
          className="flex flex-col text-3xl pb-4 mt-12 mx-auto"
        >
          <div className="flex flex-col">
            <div  className="border-none sm:text-lg md:text-xl desk:text-3xl text-textContacts rounded-lg py-2 px-4 shadow-custom cursor-pointer text-center w-2/3 mx-auto bg-bgColor hover:scale-125">
              {projectName}
            </div>

            {isOpen && (
              <ul className="transition-all duration-300 ease-in-out mt-2 z-10">
                <li className="desk:my-4">
                  <Link href="https://www.glowoasis.com/?srsltid=AfmBOorlO7PS-FuHrkz8IggBMbIX4-XFI0YOx7KihzTLIKk35hm3esKv" target="_blank" className=" sm:text-[18px] md:text-[22px] desk:text-2xl  font-bold my-2 hover:text-btmTextColor">
                    {t("nameProductThree")}
                  </Link>
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
              <Link
                href={`/${currentLocation}/mainPage#contact`}
                className={linkStyle}
              >
                {t("btmPurchase")} 3500 &#36; 
              </Link>
              <Link
                href={`/${currentLocation}/mainPage#contact`}
                className={linkStyle}
              >
                {t("btmRent")} 100 &#36; 
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarShipping;
