"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const linkStyle = "text-3xl text-textContacts";

const Header = () => {

  const t = useTranslations('Header')


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

      <Link className={linkStyle} href="mainPage#home">
        {t('home')}
      </Link>
      <Link className={linkStyle} href="mainPage#aboutUs">
        About Us
      </Link>
      <Link className={linkStyle} href="mainPage#services">
        Services
      </Link>
      <p className={linkStyle}>Price</p>

      <Link
        className="border-2 border-borderColor rounded-[12px] text-2xl text-secondaryTextColor bg-btmContacts px-10 py-3"
        href="/#contact"
      >
        Contacts
      </Link>

      {/* <div>
        <div onClick={() => setFlagMenuOpen(!flagMenuOpen)}>
          <img src={currentLanguage()} alt="flag" className="w-8 h-8" />
        </div> */}

        {/* {flagMenuOpen&& (
        <ul>
          {languageList.map((item) => (
            <li key={item.id}>
              <button onClick={()=> handleFlagClick(item.abbreviation)}>
                <Image src={item.img} alt={item.title} width={40} height={40} />
              </button>
            </li>
          ))}
        </ul>
      )} */}
      {/* </div> */}
    </nav>
  );
};
export default Header;
