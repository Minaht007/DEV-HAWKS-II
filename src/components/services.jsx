"use client"
import Image from "next/image"
import Img from "../../public/img/chooseUs/chooseUs.png"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

const cardStyle = "flex flex-col bg-textContacts rounded-xl md:w-[240px] md:h-[400px] desk:w-[370px] my-20 relative"
const svgStyles = "mt-10 md:w-28 desk:w-36 mx-auto"
const useStyle = "w-10 h-10 fill-secondaryTextColor py-10"
const cardTitle = "md:text-xl desk:text-3xl font-bold text-secondaryTextColor pl-5 pt-4"
const cartText = "text-xl font-bold text-secondaryTextColor pl-5"
const cardBtm = "flex flex-row md:w-48  desk:w-[240px] text-xl text-center justify-center py-3 bg-btmContacts text-secondaryTextColor rounded-md my-5 ml-5 md:absolute md:bottom-4 md:left-[4%]"

const Services = () => {

  const t = useTranslations('Services')
  const currentLocation = useLocale()


  return (
    <div className="bg-bgColor py-16 px-10 rounded-l-2xl" id="services relative layout">
      <h1 className="md:text-4xl desk:text-5xl font-bold text-textContacts">{t('title')}</h1>

      <div className="flex flex-row justify-between items-center mx-auto mt-20">
        <p className="w-[510px] md:text-3xl desk:text-5xl font-bold leading-relaxed">
        {t('underTitle')}
        </p>
        <p className="md:w-[600px] desk:w-[710px] md:text-xl desk:text-2xl leading-normal" style={{textAlign: "justify"}}>
        {t('underTitleSlogan')}
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-row md:justify-between justify-around">

        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use href="/img/icons/symbol-defs.svg#icon-webEarth" className={useStyle} />
          </svg>
          <p className={cardTitle} >Web Development</p>
          <p className={cartText}>{t('serviceCard1')}</p>
          <Link href={`/${currentLocation}/webDevelopmentService`} className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>


        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use href="/img/icons/symbol-defs.svg#icon-structure" className={useStyle} />
          </svg>
          <p className={cardTitle}>Programming</p>
          <p className={cartText}>{t('serviceCard2')}</p>
          <Link href={`/${currentLocation}/wps`} className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>
        
        
        <div className={cardStyle}>
          <svg className={svgStyles}>
            <use href="/img/icons/symbol-defs.svg#icon-update" className={useStyle} />
          </svg>
          <p className={cardTitle}>Consultation</p>
          <p className={cartText}>{t('serviceCard3')}</p>
          <Link href={`/${currentLocation}/consultationService`} className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>
      </div>

      <div className="flex flex-row bg-bgColor my-5 pl-5 rounded-l-2xl relative layout">
        <div >
            <h2  className="md:text-4xl desk:text-5xl font-bold text-textContacts">{t('serviceTitle2')}</h2>
            <p className="md:text-3xl desk:text-4xl font-bold py-10">{t('serviceUnderTitle2')}</p>
            <p className="md:w-[500px] desk:w-[800px] text-xl pb-10" style={{textAlign: "justify"}} >{t('serviceTextOne')}</p>
            
            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">1</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="md:text-2xl desk:text-4xl font-bold pb-6">{t('servicePointOne')}</p>
                    <p className="md:text-lg md:w-[600px] desk:text-xl pb-10 " >{t('serviceTextThree')}</p>
                </div> 
            </div>

            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">2</p>
                </div>
                <div className="pl-4 desk:w-[800px]">
                    <p className="md:text-2xl desk:text-4xl font-bold pb-6">{t('servicePointTwo')}</p>
                    <p className="md:text-lg  md:w-[600px] desk:text-xl pb-10" >{t('serviceTextFour')}</p>
                </div> 
            </div>

            <div className="flex items-start mb-5">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">3</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="md:text-2xl desk:text-4xl font-bold pb-6">{t('servicePointThree')}</p>
                    <p className="md:text-lg  md:w-[600px] desk:text-xl" >{t('serviceTextFive')}</p>
                </div> 
            </div>
        </div>

        <div className="bg-bgColor pl-5 sm:hidden md:hidden desk:block">
            <Image src={Img} alt="img" width={600} height={800} className="desk:w-[520px] desk:h-[680px] "  />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
