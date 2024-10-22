import { useTranslations } from "next-intl";


const cardStyles = "flex flex-col sm:w-52 md:w-40 md:h-40 desk:w-60 desk:h-60 border-none rounded-lg bg-textContacts justify-center items-center"
const svgStyle = "sm:w-16 md:w-10 desk:w-28"
const useStyle = "md:w-[16px] md:h-4 desk:w-8 desk:h-8 fill-secondaryTextColor mx-auto md:items-center"
const cardText = "sm:text-2xl md:text-xl desk:text-2xl sm:text-center md:text-center text-secondaryTextColor py-4"


const AboutUs = () => {

  const t = useTranslations('Header')
  const c = useTranslations('AboutUs')
  const p = useTranslations('ADV')


  return (
    <div className="mt-16 w-full px-10 layout" id="aboutUs">
      <h1 className="md:text-4xl desk:text-5xl font-bold text-textContacts">{t('aboutUs')}</h1>

      <div className="flex justify-between items-center mx-auto desk:mt-20 mt-10">
        <p className="w-[510px] sm:text-center md:text-start desk:text-start md:text-3xl desk:text-5xl font-bold leading-relaxed px-10">
        {c('sloganAboutUs')}
        </p>
        <p className="md:w-[600px] desk:w-[710px] md:text-xl desk:text-2xl leading-normal" style={{textAlign: "justify"}}>
        {c('textAboutUs')}
        </p>
      </div>

      <div className="flex sm:flex-wrap md:flex-wrap desk:flex-row justify-around items-center gap-10 my-10">
        <div className={cardStyles}>
          <svg className={svgStyle} >
            <use
              href="/img/icons/symbol-defs.svg#icon-clock"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p('adv2')}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-people"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p('adv4')}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-satisfection"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p('adv3')}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-bestPerfomens"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p('adv1')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
