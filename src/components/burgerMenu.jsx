import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const linkStyle = "text-lg text-textContacts font-semibold rounded-md hover:text-gray-400 ";
const ulStyle = "absolute top-[60%] left-10 z-10 bg-bgColor px-5 py-5 shadow-2xl";

const BurgerMenu = ({ isOpen, toggleClickBurger, isClose }) => {

    const currentLocation = useLocale()
    const t = useTranslations("Header");


  return (
    <div onClick={toggleClickBurger}>
      {isOpen && (
        <ul className={ulStyle} >
          <li>
            <Link className={linkStyle} href={`/${currentLocation}/mainPage#home`} onClick={isClose} >{t("home")}</Link>
          </li>
          <li>
            <Link className={linkStyle} href={`/${currentLocation}/mainPage#aboutUs`} onClick={isClose}>
              {t("aboutUs")}
            </Link>
          </li>
          <li>
            <Link className={linkStyle} href={`/${currentLocation}/mainPage#services`} onClick={isClose}>
              {t("services")}
            </Link>
          </li>
          <li>
          <Link href={`/${currentLocation}/prices`} className={linkStyle} onClick={isClose}>{t("price")}</Link>
          </li>
          <li>
            <Link className={linkStyle} href="/#contact" onClick={isClose}>{t("contact")}</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
