"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import burgerMenuImg from "../../public/img/burger/icons8-menu-64.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import LngSwitcher from "../utils/lng";
import { useState } from "react";

import BurgerMenu from "@/components/burgerMenu"

const linkStyle = "md:text-2xl desk:text-3xl text-textContacts";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const t = useTranslations("Header");
  const currentLocation = useLocale();

  const toggleClickBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
    className="flex flex-row justify-between items-center bg-bgColor py-5 px-10 relative ml-0"
    id="home"
    style={{ position: "sticky", top: "0", zIndex: "10" }}
  >
    <div className="">
      <Image
        src={burgerMenuImg}
        alt="burgerMenu"
        width={30}
        height={30}
        onClick={() => setBurgerOpen(!burgerOpen)}
        className="cursor-pointer sm:w-10 sm:h-10 md:hidden desk:hidden"
      />
      <BurgerMenu isOpen={burgerOpen} onClick={toggleClickBurger} isClose={closeMenu} />
    </div>
  
    <div className="flex justify-start items-start md:mr-[10%] desk:mr-[8%] ml-0">
      <Link href="mainPage#home">
        <Image
          src={Logo2}
          alt="logo"
          width={140}
          height={60}
          className="w-80 h-54 hidden desk:block"
        />
        <Image
          src={Logo}
          alt="logo"
          width={140}
          height={60}
          className="sm:w-10 sm:h-10 md:w-20 md:h-20 desk:hidden"
        />
      </Link>
    </div>
  
    <div className="flex flex-row items-center space-x-6 sm:hidden md:flex mr-[4%]">
      <Link className={linkStyle} href={`/${currentLocation}/mainPage#home`}>
        {t("home")}
      </Link>
      <Link className={linkStyle} href={`/${currentLocation}/mainPage#aboutUs`}>
        {t("aboutUs")}
      </Link>
      <Link className={linkStyle} href={`/${currentLocation}/mainPage#services`}>
        {t("services")}
      </Link>
      <p className={linkStyle}>{t("price")}</p>
  
      <Link
        className="border-2 border-borderColor rounded-[12px] md:text-xl desk:text-2xl text-secondaryTextColor bg-btmContacts md:px-6 desk:px-10 py-3"
        href="/#contact"
      >
        {t("contact")}
      </Link>
    </div>
  
    <LngSwitcher />
  </nav>
  
  );
};
export default Header;
