"use client";
import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-03.png";
import Logo2 from "../../public/img/logo/dev_hawks_done-04.png";
import { useState } from "react";
// import Link from "next/link";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex my-10 justify-around items-center">
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
            specializes in custom software development, programming, and
            consulting services tailored for local and community-based clients.
            Elevate your digital presence with our innovative solutions and
            personalized approach.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <label className="flex flex-col relative">
          <input
            type="email"
            className={`w-[500px] h-10 border-2 border-textContacts pl-4 py-2 rounded-lg focus:outline-none transition-all duration-200 ${
              isFocused ? "pt-6" : ""
            }`}
            inputMode="latin"
            minLength={6}
            placeholder=" "
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <p
            className={`absolute left-4 top-2 transition-all duration-200 text-md text-textContacts ${
              isFocused ? "transform -translate-y-8 scale-100" : ""
            }`}
          >
            Enter your email address
          </p>
        </label>
        <button className="text-lg text-secondaryTextColor px-16 py-3 font-bold bg-numberBG rounded-lg ml-4">
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Footer;
