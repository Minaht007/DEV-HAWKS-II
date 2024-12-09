"use client";
import Image from "next/image";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";

import fb3 from "../../public/img/socialIcons/fb-3.png";
import linkedin from "../../public/img/socialIcons/linkedin.png";
import instagram from "../../public/img/socialIcons/instagram.png";
import telegram2 from "../../public/img/socialIcons/telegram-2.png";

// import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const iconStyle = "sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full";

const Footer = () => {
  const t = useTranslations("Footer");

  // const [isFocused, setIsFocused] = useState(false);
  // const [input, setInput] = useState("");
  return (
    <section className="flex sm:flex-col desk:flex-row py-5 justify-around items-center bg-secondaryBG">
      <div className="flex flex-col sm:mb-5  md:w-2/3 desk:w-1/3">
        <div>
          <Image
            src={Logo2}
            alt="logo"
            width={140}
            height={60}
            className="w-80 h-54 "
          />
        </div>

        <div className="sm:hidden md:block">
          <p
            className="py-5  text-xl text-textContacts"
            style={{ textAlign: "justify" }}
          >
            {t("text")}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
		<h2 className="text-start text-clamp py-3">Find us in:</h2>
	  <div className="flex flex-row sm:gap-4 md:gap-10 desk:gap-12">
        <Link href="https://www.facebook.com/devhawksucraine/" className="rounded-full shadow-custom">
          <Image
            src={fb3}
            alt="fb"
            width={40}
            height={40}
            className={iconStyle}
          />
        </Link>

		<Link href="https://www.instagram.com/dev_hawksua/" className="rounded-full shadow-custom"> <Image
          src={instagram}
          alt="instagram"
          width={40}
          height={40}
          className={iconStyle}
        /></Link>

       
        <Link href="https://www.linkedin.com/company/105512886/admin/page-posts/published/" className="rounded-full shadow-custom">
          <Image
            src={linkedin}
            alt="linkedin"
            width={40}
            height={40}
            className={iconStyle}
          />
        </Link>
        <Link href="https://t.me/Doctor_TAL" className="rounded-full shadow-custom">
          <Image
            src={telegram2}
            alt="telegram"
            width={40}
            height={40}
            className={iconStyle}
          />
        </Link>
      </div>
	  </div>

      {/* <div className="flex flex-col desk:flex-row justify-center desk:items-center"> */}

      {/* <label className="flex flex-col relative my-2 items-center justify-center">
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
						{t("footerPlaceholder")}
					</p>
				</label>
				<button
					type="submit"
					className="text-lg text-secondaryTextColor sm:px-8 md:px-12 desk:px-16 py-3 font-bold bg-numberBG rounded-lg desk:ml-4 pointer"
				>
					{t("footerBtm")}
				</button> */}
      {/* </div> */}
    </section>
  );
};

export default Footer;
