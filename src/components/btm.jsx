
import Link from 'next/link';
import React from 'react';
import { useLocale } from "next-intl";

const GradientButton = ({text}) => {   
  const currentLocation = useLocale();
  return (
    <Link href={`/${currentLocation}/forExamplePage`}
      className="
        relative inline-block px-8 py-3 text-lg font-semibold bg-btmContacts text-secondaryTextColor hover:text-textContacts 
        border-none rounded-lg overflow-hidden group
        transition-all duration-500 hover:scale-125"
    >
      <span
        className="
          absolute inset-0 bg-gradient-to-br from-[#7dd3fc] via-[#bae6fd] to-[#e2e8f0]
          transform scale-0 group-hover:scale-100 transition-all duration-400"
      ></span>
      <span className="relative z-10">{text}</span>
    </Link>
  );
};

export default GradientButton;

// href={`/${link}`}