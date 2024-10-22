import Image from "next/image";
import heroImage from "../../public/img/hero/heroImg.png";
import underLine from "../../public/img/hero/underLine.png";
import checkOne from "../../public/img/icons/checkOne.png"
import Link from "next/link";
import {useLocale, useTranslations } from "next-intl";

const Hero = () => {

  const t = useTranslations('Hero')
  const currentLocation = useLocale()


  return (
    <div className="relative w-screen h-full bg-bgColor layout">
      <div className="flex flex-row justify-between items-center sm:py-10 md:py-16 desk:py-20 ">
        <div className="ml-16">
          <div className="flex flex-row items-center sm:mb-10 md:mb-16 sm:mb-10 md:mb-16 desk:mb-20">
            <Image src={checkOne} alt="check" width={12} height={12} className="w-6 h-6" />
            <p className="text-textContacts font-bold text-xl pl-3">{t('title')}</p>
          </div>
          <h1 className="sm:text-2xl md:text-3xl desk:text-5xl text-textContacts font-ball">
            {t("slogan1")} <br/> {t("slogan2")}
          </h1>
          <Image
            src={underLine}
            alt="underLine"
            width={400}
            height={10}
            className="sm:pb-10 md:pb-16 desk:pb-20 md:w-[200px]"
          />
          <Link href={`/${currentLocation}/getStarted`} className="border-2 border-borderColor rounded-[12px] text-secondaryTextColor sm:text-lg md:text-xl desk:text-2xl bg-btmContacts sm:px-4 md:px-6 desk:px-10 py-3">
            Get Started
          </Link>
        </div>
        <Image
          src={heroImage}
          alt="heroImg"
          sizes="100vw"
          style={{
            width: "30%",
            height: "auto",
          }}
          width={500}
          height={300}
          className="mr-20"
        />
      </div>
    </div>
  );
};

export default Hero;
