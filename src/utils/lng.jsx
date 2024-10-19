"use client";
import { useState } from "react";
import Image from "next/image";
import ukrainianFlagImg from "../../public/img/flags/ukraine.png";
import enFlagImg from "../../public/img/flags/britain.png";
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
      const newPath = currentPath.replace(/\/(en|ua)/, `/${locale}`);
      router.replace(newPath);
    });
    setIsOpen(false);
  };
  

  // const onSelectChange = (locale) => {
  //   startTransition(() => {
  //     router.replace(`/${locale}`);
  //   });
  //   setIsOpen(false);
  // };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center p-2 border rounded"
      >
        {/* <Image
          src={localActive === 'en' ? enFlagImg : ukrainianFlagImg}
          alt={localActive === 'en' ? 'English' : 'Ukrainian'}
          width={20}
          height={20}
        /> */}
        {localActive === "en" ? (
          <Image src={enFlagImg} alt="English" width={30} height={30} />
        ) : (
          <Image
            src={ukrainianFlagImg}
            alt="Ukrainian"
            width={30}
            height={30}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded mt-2">
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
        </div>
      )}
    </div>
  );
};

export default LngSwitcher;

{
  /* <p style={lngTextStyle}>English</p> */
}
{
  /* <p style={lngTextStyle}>Українська</p>  */
}
