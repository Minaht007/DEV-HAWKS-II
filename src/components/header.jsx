"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import LngSwitcher from "../utils/lng"

const linkStyle = "md:text-2xl desk:text-3xl text-textContacts";

const Header = () => {

  const t = useTranslations('Header')
  const currentLocation = useLocale()


  return (
    <nav
      className="flex flex-row justify-between items-center bg-bgColor py-5 px-10"
      id="home"
      style={{ position: "sticky", top: "0", zIndex: "10" }}
    >
      <Link href="mainPage#home">
        <Image
          src={Logo2}
          alt="logo"
          width={140}
          height={60}
          className=" w-80 h-54 hidden desk:block"
        />
        <Image
          src={Logo}
          alt="logo"
          width={140}
          height={60}
          className="sm:w-10 sm:h-10 md:w-20 md:h-20 desk:hidden"
        />
      </Link>

      <Link className={linkStyle} href={`/${currentLocation}/mainPage#home`}>
        {t('home')}
      </Link>
      <Link className={linkStyle} href={`/${currentLocation}/mainPage#aboutUs`}>
      {t('aboutUs')}
      </Link>
      <Link className={linkStyle} href={`/${currentLocation}/mainPage#services`}>
      {t('services')}
      </Link>
      <p className={linkStyle}>{t('price')}</p>

      <Link
        className="border-2 border-borderColor rounded-[12px] md:text-xl desk:text-2xl text-secondaryTextColor bg-btmContacts md:px-6 desk:px-10 py-3"
        href="/#contact"
      >
        {t('contact')}
      </Link>

      <LngSwitcher />      
    </nav>
  );
};
export default Header;
