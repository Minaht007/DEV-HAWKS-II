"use client";
import { useState } from "react";
import Image from "next/image";
import ukrainianFlagImg from "../../public/img/flags/ukraine.png";
import enFlagImg from "../../public/img/flags/britain.png";
import deFlag from "../../public/img/flags/germany.png";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

// const lngTextStyle = "md:text-lg desk:text-2xl"

const LngSwitcher = () => {
  const [isPending, startTransition] = useTransition();

  console.log(isPending);

  const router = useRouter();
  const localActive = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = (locale) => {
   
    startTransition(() => {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(/\/(en|ua|de)/, `/${locale}`);
      router.replace(newPath);
    });
    setIsOpen(false);  };

 
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center p-2  rounded"
      >       
        {localActive === "en" ? (
          <Image src={enFlagImg} alt="English" width={40} height={40} />
        ) : localActive === "ua" ? (
          <Image
            src={ukrainianFlagImg}
            alt="Ukrainian"
            width={40}
            height={40}
          />
        ) : localActive === "de" ? (
          <Image src={deFlag} alt="German" width={40} height={40} />
        ) : null}
      </button>

      {isOpen && (
        <div className="absolute z-10 shadow-lg rounded mt-2">
          <button
            onClick={() => onSelectChange("en")}
            className="flex items-center p-2 w-full"
          >
            <Image src={enFlagImg} alt="English" width={60} height={60} />
          </button>
          
          <button
            onClick={() => onSelectChange("ua")}
            className="flex items-center p-2 w-full"
          >
            <Image
              src={ukrainianFlagImg}
              alt="Ukrainian"
              width={60}
              height={60}
            />
          </button>

          <button
            onClick={() => onSelectChange("de")}
            className="flex items-center p-2 w-full"
          >
            <Image src={deFlag} alt="de_Flag" width={60} height={60} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LngSwitcher;


