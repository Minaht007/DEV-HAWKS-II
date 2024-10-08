"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import Link from "next/link";
import { useState } from "react";
import {languageList} from "@/components/flag"
import { useTranslation } from "react-i18next";

const linkStyle = "text-3xl text-textContacts";

const Header = () => {

  const [flagMenuOpen, setFlagMenuOpen] = useState(false)

  const {t, i18n} = useTranslation()
  console.log(t)

  const handleFlagClick = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setFlagMenuOpen(false);
  };

  const currentLanguage = () => {
    const language = languageList.find(
      (flag) => flag.abbreviation === i18n.language
    );
    return language ? language.img : null;
  };

  return (
    <div className="flex flex-row justify-between items-center bg-bgColor py-5 px-10" id="home" style={{ position: "sticky", top: "0", zIndex: "10" }}>
     <Link href="mainPage#home">
     <Image
        src={Logo2}
        alt="logo"
        width={140}
        height={60}
        className="w-80 h-54 hidden md:block"
      />
      <Image
        src={Logo}
        alt="logo"
        width={140}
        height={60}
        className="w-20 h-20 md:hidden"
      />
     </Link>
     

      <Link className={linkStyle} href="mainPage#home" >Home</Link>
      <Link className={linkStyle} href="#aboutUs">
        About Us
      </Link>
      <Link className={linkStyle} href="#services">
        Services
      </Link>
      <p className={linkStyle}>Price</p>

      <Link
        className="border-2 border-borderColor rounded-[12px] text-2xl text-secondaryTextColor bg-btmContacts px-10 py-3"
        href="/#contact"
      >
        Contacts
      </Link>
      
      <div>
        <div onClick={() => setFlagMenuOpen(!flagMenuOpen)}>
          <img src={currentLanguage()} alt="flag" className="w-8 h-8" />
        </div>


         {flagMenuOpen&& (
        <ul>
          {languageList.map((item) => (
            <li key={item.id}>
              <button onClick={()=> handleFlagClick(item.abbreviation)}>
                <Image src={item.img} alt={item.title} width={40} height={40} />
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>    


    </div>
  );
};
export default Header;


