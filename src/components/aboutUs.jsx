import { useTranslations } from "next-intl";

const cardStyles =
  "flex flex-col sm:w-52 md:w-40 md:h-40 desk:w-60 desk:h-60 border-none rounded-lg bg-textContacts justify-center items-center";
const svgStyle = "sm:w-16 md:w-10 desk:w-28";
const useStyle =
  "md:w-[16px] md:h-4 desk:w-8 desk:h-8 fill-secondaryTextColor mx-auto md:items-center";
const cardText =
  "sm:text-2xl md:text-xl desk:text-2xl sm:text-center md:text-center text-secondaryTextColor py-4";

const AboutUs = () => {
  const t = useTranslations("Header");
  const c = useTranslations("AboutUs");
  const p = useTranslations("ADV");

  return (
    <div className="sm:mt-4 md:mt-16 w-full px-10 layout" id="aboutUs">
      <h1 className="sm:text-3xl md:text-4xl desk:text-5xl font-bold text-textContacts text-center">{t('aboutUsTitle')}</h1>

      <div className="flex justify-between items-center mx-auto sm:mt-2 md:mt-4 desk:mt-6 sm:flex-col md:flex-col desk:flex-row">
        <div className="sm:w-2/3 md::w-4/5 desk:w-1/3">
          <p className=" sm:text-center md:text-center desk:text-start md:text-3xl desk:text-4xl font-bold md:leading-[40px] desk:leading-[60px] tracking-wide px-10 py-6">
            {c("sloganAboutUs")}
          </p>
        </div>

        <ul className="md:w-4/5 desk:w-2/3">
          <li
            className="md:text-xl desk:text-2xl desk:leading-[36px]"
            style={{ textAlign: "justify" }}
          >
            <p className="md:pb-0 ">{c("textAboutUsFirst")}</p>
            <br /> <p className="md:pt-2 desk:pt-0 ">
              {c("textAboutUsSecond")}
            </p>{" "}
            <br /> <p className="pb-2 ">{c("textAboutUsThird")}</p> <br />{" "}
            <p className="" >{c("textAboutUsFour")}</p>
            
          </li>
        </ul>
      </div>

      <div className="flex sm:flex-wrap md:flex-wrap desk:flex-row justify-around items-center gap-10 my-10">
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-clock"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p("adv2")}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-people"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p("adv4")}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-satisfection"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p("adv3")}</p>
        </div>
        <div className={cardStyles}>
          <svg className={svgStyle}>
            <use
              href="/img/icons/symbol-defs.svg#icon-bestPerfomens"
              className={useStyle}
            />
          </svg>
          <p className={cardText}>{p("adv1")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


