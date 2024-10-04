"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import Link from "next/link";

const linkStyle = "text-3xl text-textContacts";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-bgColor py-5 px-10" id="home" style={{ position: "sticky", top: "0", zIndex: "10" }}>
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

      <Link className={linkStyle} href="#home" >Home</Link>
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
    </div>
  );
};
export default Header;
