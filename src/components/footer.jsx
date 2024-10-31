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
    <div className="flex sm:flex-col desk:flex-row py-10 justify-around items-center bg-secondaryBG">
      <div className="flex flex-col sm:w-2/3 md:w-2/3 desk:w-1/3">
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
            className="sm:w-24 sm:h-24 w-20 h-20 md:hidden"
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

      <div className="flex flex-col desk:flex-row justify-center desk:items-center">
        <label className="flex flex-col relative my-2 items-center justify-center">
          <input
            type="email"
            className={`md:w-[300px] desk:w-[500px] h-full border-2 border-textContacts pl-4 py-4  rounded-lg focus:outline-none transition-all duration-400 ${
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
        <button type="submit" className="text-lg text-secondaryTextColor sm:px-8 md:px-12 desk:px-16 py-3 font-bold bg-numberBG rounded-lg md:mt-4 ml-4 pointer">
        {t('footerBtm')}
        </button>
      </div>
    </div>
  );
};

export default Footer;
