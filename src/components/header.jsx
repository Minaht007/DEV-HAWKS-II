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

const linkStyle = "md:text-2xl desk:text-3xl text-textContacts md:px-4 desk:px-6";

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
			className="flex flex-row justify-between items-center bg-bgColor desk:py-3 px-6 shadow-md"
			id="home"
			style={{ position: "sticky", top: "0", zIndex: "10" }}
		>
			<div className="cursor-pointer sm:w-10 sm:h-10 md:hidden desk:hidden">
				<Image
					src={burgerMenuImg}
					alt="burgerMenu"
					width={40}
					height={40}
					onClick={() => setBurgerOpen(!burgerOpen)}
				/>
				<BurgerMenu isOpen={burgerOpen} onClick={toggleClickBurger} isClose={closeMenu} />
			</div>

			<div className="flex justify-start items-start ">
				<Link href="mainPage#home">
					<Image
						src={Logo2}
						alt="logo"
						width={140}
						height={60}
						className="w-80 h-54 hidden desk:block"
					/>
					<Image src={Logo} alt="logo" className="sm:w-14 sm:h-14 md:w-24 md:h-24 desk:hidden" />
				</Link>
			</div>

			<div className="flex flex-row items-center justify-center sm:hidden md:block desk:visible">
				<Link className={linkStyle} href={`/${currentLocation}/mainPage#home`}>
					{t("home")}
				</Link>
				<Link className={linkStyle} href={`/${currentLocation}/forExamplePage`}>
					{t("aboutUs")}
				</Link>
				<Link className={linkStyle} href={`/${currentLocation}/mainPage#services`}>
					{t("services")}
				</Link>
				<Link href={`/${currentLocation}/prices`} className={linkStyle}>
					{t("price")}
				</Link>
			</div>

			<Link
				className=" rounded-[12px] md:text-xl desk:text-2xl text-secondaryTextColor bg-btmContacts md:p-3 sm:p-2  desk:px-10 "
				href="/#contact"
			>
				{t("contact")}
			</Link>

			<LngSwitcher />
		</nav>
	);
};
export default Header;

// flex flex-row items-center space-x-6 sm:hidden md:flex
