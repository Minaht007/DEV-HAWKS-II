"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import { useState } from "react";
import { useTranslations } from "next-intl";
// import Link from "next/link";

const Footer = () => {

  const t = useTranslations('Footer')

  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("")
  return (
    <div className="flex py-10 justify-around items-center bg-secondaryBG ">
      <div className="flex flex-col w-1/3">
        <div>
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
        </div>

        <div>
          <p
            className="py-5 text-xl text-textContacts"
            style={{ textAlign: "justify" }}
          >
            {t('text')}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <label className="flex flex-col relative">
          <input
            type="email"
            className={`w-[500px] h-full border-2 border-textContacts pl-4 py-4  rounded-lg focus:outline-none transition-all duration-400 ${
              isFocused ? "" : ""
            }`}
            inputMode="latin"
            minLength={6}
            placeholder=" "
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
          />
          <p
            className={`absolute left-4 top-[25%] transition-all duration-400 text-md text-textContacts ${
              isFocused || input.length > 0 ? "transform -translate-y-10 scale-100" : ""
            }`}
          >
            {t('footerPlaceholder')}
          </p>
        </label>
        <button type="submit" className="text-lg text-secondaryTextColor px-16 py-3 font-bold bg-numberBG rounded-lg ml-4 pointer">
        {t('footerBtm')}
        </button>
      </div>
    </div>
  );
};

export default Footer;
