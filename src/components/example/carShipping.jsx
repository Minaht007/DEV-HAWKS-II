"use client";
import { useState } from "react";
import Image from "next/image";

import carMaineImg from "../../../public/img/example/carSale/mainPageJpeg.jpg";
import car1 from "../../../public/img/example/carSale/car1.jpg";
import car2 from "../../../public/img/example/carSale/car2.jpg";
import car3 from "../../../public/img/example/carSale/car3.jpg";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const imgStyle =
  "sm:w-[300px]   md:h-[340px] desk:w-[400px] desk:h-[600px] sm:my-4  rounded-lg";
  const imgMobStyle =
  "sm:w-[300px]  md:w-[200px]  md:h-[400px] desk:w-[300px] desk:h-[600px] sm:my-4 md:text-center desk:text-start rounded-lg";

const divContainerStyle =
  "md:w-[380px] md:h-[340px] desk:w-[600px] desk:h-[700px] sm:my-2 md:my-4 desk:my-10";

const linkStyle =
  "border-[1px] border-textContacts px-4 py-2 w-2/5 rounded-md text-center sm:text-[14px] md:text-lg desk:text-xl cursor-pointer hover:scale-125 hover:border-[#fb923c]";

const CarShipping = () => {
  const t = useTranslations("For example");
  const currentLocation = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(t("About"));
  console.log(setProjectName);

  const projectPoint = [
    "Frontend-Next.js",
    "Backend-Node.js",
    t("productPointOne"),
    t("productPointTwo"),
    t("productPointThree"),
    t("productPointFour"),
    t("productPointFive"),
  ];

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-wrap justify-around">
      <div className={divContainerStyle}>
        <Image
          src={car1}
          alt="Car Anketa"
          width={400}
          height={400}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={car2}
          alt="car1"
          width={600}
          height={400}
          className={imgStyle}
        />
      </div>
      <div className={divContainerStyle}>
        <Image
          src={car3}
          alt="car2"
          width={400}
          height={400}
          className={imgMobStyle}
        />
      </div>

      {/* For pic */}

      <div className="flex flex-row sm:w-[400px]  desk:w-[600px] my-10">
        {/* <Image
          src={car3}
          alt="car2"
          width={400}
          height={400}
          className={imgStyle}
        /> */}
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
                  <Link href="https://www.raul-avto.com/" target="_blank" className=" sm:text-[18px] md:text-[22px] desk:text-2xl  font-bold my-2 hover:text-btmTextColor">
                    {t("nameProductOne")}
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
                {t("btmPurchase")} 2000 &#36; 
              </Link>
              <Link
                href={`/${currentLocation}/mainPage#contact`}
                className={linkStyle}
              >
                {t("btmRent")} 70 &#36; 
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarShipping;

{/* <span>{t("current")}</span>{" "} */}
// {t("currentRent")}