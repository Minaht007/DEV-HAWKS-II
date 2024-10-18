import { useTranslations } from "next-intl";

const svgStyle = "md:w-8 md:h-8 desk:w-10 desk:h-10 md:mx-2"
const textStyle = "md:text-lg desk:text-xl font-bold px-2 md:text-start"
const divStyle = "flex md:flex-col flex-row md:items-start desk:items-center "

const Advantage = () => {

  const t = useTranslations('ADV')

  return (
   <div className="flex justify-end">
     <div className="flex flex-row w-[80%] justify-around relative mt-[-4%] items-end py-10 border-none rounded-l-2xl bg-[#f8fafc] ">
      <div className={divStyle}>
        <svg className={svgStyle}>
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-bestPerfomens"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className={textStyle}>{t('adv1')}</p>
      </div>
      <div className={divStyle}>
        <svg className={svgStyle}>
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-clock"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className={textStyle}>{t('adv2')}</p>
      </div>
      <div className={divStyle}>
        <svg className={svgStyle}>
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-satisfection"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className={textStyle}>{t('adv3')}</p>
      </div>
      <div className={divStyle}>
        <svg className={svgStyle}>
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-people"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className={textStyle}>{t('adv4')}</p>
      </div>
    </div>
   </div>
  );
};

export default Advantage;
