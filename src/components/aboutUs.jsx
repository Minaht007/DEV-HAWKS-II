import { useTranslations } from "next-intl";


const cardStyles = "flex flex-col w-60 h-60 border-none rounded-lg bg-textContacts justify-center items-center"
const svgStyle = "w-8 h-8 fill-secondaryTextColor"
const cardText = "text-2xl text-secondaryTextColor py-4"


const AboutUs = () => {

  const t = useTranslations('Header')
  const c = useTranslations('AboutUs')
  const p = useTranslations('ADV')


  return (
    <div className="mt-16 w-full px-10" id="aboutUs">
      <h1 className="text-5xl font-bold text-textContacts">{t('aboutUs')}</h1>

      <div className="flex flex-row justify-between items-center mx-auto mt-20">
        <p className="w-[510px] text-5xl font-bold leading-relaxed">
        {c('sloganAboutUs')}
        </p>
        <p className="w-[710px] text-2xl leading-normal" style={{textAlign: "justify"}}>
        {c('textAboutUs')}
        </p>
      </div>

      <div className="flex flex-row justify-around items-center my-20">
        <div className={cardStyles}>
          <svg >
            <use
              href="/img/icons/symbol-defs.svg#icon-clock"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>{p('adv2')}</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-people"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>{p('adv4')}</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-satisfection"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>{p('adv3')}</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-bestPerfomens"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>{p('adv1')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
