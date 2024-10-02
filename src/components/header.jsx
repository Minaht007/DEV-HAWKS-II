import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
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

      <p>Home</p>
      <p>About Us</p>
      <p>Portfolio</p>

      <button className="border-2 border-borderColor rounded-[12px] text-textContacts bg-btmContacts px-10 py-3">
        Contacts
      </button>
    </div>
  );
};
export default Header;
