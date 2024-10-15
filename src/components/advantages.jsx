import { useTranslations } from "next-intl";


const Advantage = () => {

  const t = useTranslations('ADV')

  return (
   <div className="flex justify-end">
     <div className="flex flex-row w-[80%] justify-around relative mt-[-4%] items-end py-10 border-none rounded-l-2xl bg-[#f8fafc] ">
      <div className="flex flex-row items-center">
        <svg className="w-10 h-10">
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-bestPerfomens"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className="text-xl font-bold px-2">{t('adv1')}</p>
      </div>
      <div className="flex flex-row items-center">
        <svg className="w-10 h-10">
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-clock"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className="text-xl font-bold px-2">{t('adv2')}</p>
      </div>
      <div className="flex flex-row items-center">
        <svg className="w-10 h-10">
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-satisfection"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className="text-xl font-bold px-2">{t('adv3')}</p>
      </div>
      <div className="flex flex-row items-center">
        <svg className="w-10 h-10">
          <use
            xlinkHref="/img/icons/symbol-defs.svg#icon-people"
            className="fill-[#0c4a6e]"
          />
        </svg>
        <p className="text-xl font-bold px-2">{t('adv4')}</p>
      </div>
    </div>
   </div>
  );
};

export default Advantage;
