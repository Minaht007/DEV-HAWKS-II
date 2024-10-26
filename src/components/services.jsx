"use client";
import Image from "next/image";
import Img from "../../public/img/chooseUs/chooseUs.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const cardStyle =
  "flex flex-col bg-textContacts rounded-xl sm:w-[360px] md:w-[360px] md:h-[400px] desk:w-[360px] my-20 relative";
const svgStyles = "mt-10 md:w-28 desk:w-36 mx-auto";
const useStyle = "w-10 h-10 fill-secondaryTextColor py-10";
const cardTitle =
  "md:text-xl desk:text-3xl font-bold text-secondaryTextColor px-5 pt-4";
const cartText = "text-xl font-bold text-secondaryTextColor px-5";
const cardBtm =
  "flex flex-row w-60 sm:px-2 md:w-48  desk:w-[240px] text-xl text-center justify-center py-3 bg-btmContacts text-secondaryTextColor rounded-md my-5 ml-5 md:absolute md:bottom-4 md:left-[4%]";
const numberStyles =
  "sm:text-md desk:text-2xl text-secondaryTextColor font-bold flex justify-center items-center sm:w-6 sm:h-6 desk:w-8 desk:h-8 border-none rounded-full bg-numberBG";
const pointContainerStyle =
  "sm:min-w-[300px] sm:max-w-[460px] sm:pl-2 desk:pl-4 desk:w-[800px]";
const pointTitleStyle =
  "sm:text-start md:text-2xl desk:text-4xl font-bold sm:pb-2 md:pb-4 desk:pb-6";
const pointTextStyle =
  "flex flex-wrap sm:text-start md:text-lg md:w-[600px] desk:text-xl pb-10";

const Services = () => {
  const t = useTranslations("Services");
  const currentLocation = useLocale();

  return (
    <div
      className="bg-bgColor w-full sm:py-8 md:py-12 desk:py-16 sm:px-2 desk:px-10 rounded-l-2xl layout"
      id="services"
    >
      <h1 className="sm:text-3xl md:text-4xl desk:text-5xl font-bold text-textContacts">
        {t("title")}
      </h1>

      <div className="flex w-full flex-row sm:justify-around justify-between items-center mx-auto sm:mt-10 md:mt-16 desk:mt-20">
        <p className="sm:w-[200px] md:w-[200px] desk:w-[510px] sm:text-xl  md:text-2xl desk:text-5xl font-bold leading-relaxed sm:px-5">
          {t("underTitle")}
        </p>
        <p
          className="sm:w-[200px] md:w-[500px] desk:w-[710px] sm:text-md md:text-xl desk:text-2xl leading-normal"
          style={{ textAlign: "justify" }}
        >
          {t("underTitleSlogan")}
        </p>
      </div>

      {/* cards */}
      <div className="flex items-center sm:flex-wrap md:flex-wrap desk:flex-row md:justify-center md:justify-between justify-around items-center">
        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use
              href="/img/icons/symbol-defs.svg#icon-webEarth"
              className={useStyle}
            />
          </svg>
          <p className={cardTitle}>Web Development</p>
          <p className={cartText}>{t("serviceCard1")}</p>
          <Link
            href={`/${currentLocation}/webDevelopmentService`}
            className={cardBtm}
          >
            {t("serviceCardBtm")}
          </Link>
        </div>

        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use
              href="/img/icons/symbol-defs.svg#icon-structure"
              className={useStyle}
            />
          </svg>
          <p className={cardTitle}>Programming</p>
          <p className={cartText}>{t("serviceCard2")}</p>
          <Link href={`/${currentLocation}/wps`} className={cardBtm}>
            {t("serviceCardBtm")}
          </Link>
        </div>

        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use
              href="/img/icons/symbol-defs.svg#icon-update"
              className={useStyle}
            />
          </svg>
          <p className={cardTitle}>Consultation</p>
          <p className={cartText}>{t("serviceCard3")}</p>
          <Link
            href={`/${currentLocation}/consultationService`}
            className={cardBtm}
          >
            {t("serviceCardBtm")}
          </Link>
        </div>
      </div>

      {/* Why choose us */}

      <div className="flex bg-bgColor sm:my-2 desk:my-5 pl-5 rounded-l-2xl  md:w-full relative">
        <div className="sm:text-center sm:max-w-[400px]  desk:max-[700px]">
          <h2 className="  md:text-4xl desk:text-5xl font-bold text-textContacts">
            {t("serviceTitle2")}
          </h2>
          <p className="sm:max-w-[400px] md:text-3xl desk:text-4xl font-bold py-10">
            {t("serviceUnderTitle2")}
          </p>
          <p
            className="flex flex-wrap sm:max-w-[400px] md:w-[500px] desk:max-w-[800px] sm:text-md desk:text-xl pb-10"
            style={{ textAlign: "justify" }}
          >
            {t("serviceTextOne")}
          </p>

          <div className="flex items-start sm:min-w-[300px] sm:max-w-[460px]">
            <div className="">
              <p className={numberStyles}>1</p>
            </div>
            <div className={pointContainerStyle}>
              <p className={pointTitleStyle}>{t("servicePointOne")}</p>
              <p className={pointTextStyle}>{t("serviceTextThree")}</p>
            </div>
          </div>

          <div className="flex justify-center items-start sm:min-w-[300px] sm:max-w-[460px]">
            <div className="">
              <p className={numberStyles}>2</p>
            </div>
            <div className={pointContainerStyle}>
              <p className={pointTitleStyle}>{t("servicePointTwo")}</p>
              <p className={pointTextStyle}>{t("serviceTextFour")}</p>
            </div>
          </div>

          <div className="flex items-start sm:min-w-[300px] sm:max-w-[460px]">
            <div className="">
              <p className={numberStyles}>3</p>
            </div>
            <div className={pointContainerStyle}>
              <p className={pointTitleStyle}>{t("servicePointThree")}</p>
              <p className={pointTextStyle}>{t("serviceTextFive")}</p>
            </div>
          </div>
        </div>

        <Image
          src={Img}
          alt="img"
          width={520}
          height={680}
          className="desk:w-[600px] desk:h-[800px] absolute bottom-16 right-0 sm:hidden md:hidden desk:block pl-5"
        />
      </div>
    </div>
  );
};

export default Services;
