"use client"
import Image from "next/image"
import Img from "../../public/img/chooseUs/chooseUs.png"
import Link from "next/link"
import { useTranslations } from "next-intl"

const cardStyle = "flex flex-col bg-textContacts rounded-xl w-[370px] my-20"
const useStyle = "w-10 h-10 fill-secondaryTextColor py-10"
const cardTitle = "text-3xl font-bold text-secondaryTextColor pl-5 pt-4"
const cartText = "text-xl font-bold text-secondaryTextColor pl-5"
const cardBtm = "flex flex-row w-[240px] text-xl text-center justify-center py-3 bg-btmContacts text-secondaryTextColor rounded-md my-5 ml-5"

const Services = () => {

  const t = useTranslations('Services')


  return (
    <div className="bg-bgColor py-16 px-10 rounded-l-2xl" id="services">
      <h1 className="text-5xl font-bold text-textContacts">{t('title')}</h1>

      <div className="flex flex-row justify-between items-center mx-auto mt-20">
        <p className="w-[510px] text-5xl font-bold leading-relaxed">
        {t('underTitle')}
        </p>
        <p className="w-[710px] text-2xl leading-normal " style={{textAlign: "justify"}}>
        {t('underTitleSlogan')}
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-row justify-around">

        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-webEarth" className={useStyle} />
          </svg>
          <p className={cardTitle} >Web Development</p>
          <p className={cartText}>{t('serviceCard1')}</p>
          <Link href="webDevelopmentService" className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>


        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-structure" className={useStyle} />
          </svg>
          <p className={cardTitle}>Programming</p>
          <p className={cartText}>{t('serviceCard2')}</p>
          <Link href="wps" className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>
        
        
        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-update" className={useStyle} />
          </svg>
          <p className={cardTitle}>Consultation</p>
          <p className={cartText}>{t('serviceCard3')}</p>
          <Link href="consultationService" className={cardBtm}>{t('serviceCardBtm')}</Link>
        </div>
      </div>

      <div className="flex flex-row bg-bgColor my-5 pl-5 rounded-l-2xl ">
        <div >
            <h2  className="text-5xl font-bold text-textContacts mt-5">{t('serviceTitle2')}</h2>
            <p className="text-4xl font-bold py-10">{t('serviceUnderTitle2')}</p>
            <p className="w-[800px] text-xl pb-10">{t('serviceTextOne')}</p>
            
            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">1</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">{t('servicePointOne')}</p>
                    <p className="text-xl pb-10" >{t('serviceTextThree')}</p>
                </div> 
            </div>

            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">2</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">{t('servicePointTwo')}</p>
                    <p className="text-xl pb-10" >{t('serviceTextFour')}</p>
                </div> 
            </div>

            <div className="flex items-start mb-5">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">3</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">{t('servicePointThree')}</p>
                    <p className="text-xl" >{t('serviceTextFive')}</p>
                </div> 
            </div>
        </div>

        <div className="bg-bgColor pl-5">
            <Image src={Img} alt="img" width={600} height={800} className="w-[520px] h-[680px]"  />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
