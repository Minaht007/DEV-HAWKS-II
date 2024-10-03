import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import Link from "next/link";

const linkStyle = "text-3xl text-textContacts"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-bgColor px-10">
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

      <p className={linkStyle} >Home</p>
      <p className={linkStyle}>About Us</p>
      <Link className={linkStyle} href="#services">Services</Link>
      <p className={linkStyle}>Price</p>

      <button className="border-2 border-borderColor rounded-[12px] text-2xl text-secondaryTextColor bg-btmContacts px-10 py-3">
        Contacts
      </button>
    </div>
  );
};
export default Header;
