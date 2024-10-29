import { useTranslations } from "next-intl";

const titleStyle = "text-5xl text-textContacts mb-10";
const underTitle = "text-3xl text-textContacts mb-10";
const cellStyle =
  "flex flex-col items-center justify-center text-center  mx-16 my-2 md:min-text-base md:max-text-lg desk:text-2xl text-secondaryTextColor bg-numberBG rounded-[32px] ";
const cellContainer = "flex flex-col";
const centralCellContainer =
  "flex flex-col items-around border-textContacts border-l-4 border-r-4";
const spanStyle = "py-5 px-5";
const tabTitleStyle = "text-center text-2xl font-bold text-textContacts";

const PriceForTAbAndDev = () => {
  const t = useTranslations("Prices");

  return (
    <div className=" md:my-10 desk:my-16 md:px-10 desk:px-16">
      <h1 className={titleStyle}>{t("title")}</h1>
      <p className={underTitle}>{t("underTitleOne")}</p>
      <p className={underTitle}>{t("underTitleTwo")}</p>

      <h2 className="text-2xl text-textContacts underline ">{t("tableCaption")}</h2>
      <div className="flex flex-col justify-around border-textContacts border-t-4 border-b-4 my-6">
        <div className="flex flex-row justify-around">
          <h2 className={tabTitleStyle}>{t("tabTitleOne")}</h2>
          <h2 className={tabTitleStyle}>{t("tabTitleTwo")}</h2>
          <h2 className={tabTitleStyle}>{t("tabTitleThree")}</h2>
        </div>

        <div className="flex flex-row justify-around mb-4">
          <div className={cellContainer}>
            <p className={cellStyle}>
              <span className={spanStyle}>{t("typeApplicationLanding")}</span>
              <span className={spanStyle}>{t("typeApplicationSmall")}</span>
              <span className={spanStyle}>{t("typeApplicationMiddle")}</span>
              <span className={spanStyle}>{t("typeApplicationLarge")}</span>
            </p>
          </div>

          <div className={centralCellContainer}>
            <p className={cellStyle}>
              <span className={spanStyle}>{t("pricesLanding")}</span>
              <span className={spanStyle}>{t("pricesSmall")}</span>
              <span className={spanStyle}>{t("pricesMiddle")}</span>
              <span className={spanStyle}>{t("pricesLarge")}</span>
            </p>
          </div>
          <div className={cellContainer}>
            <p className={cellStyle}>
              <span className={spanStyle}>{t("leadTimeLanding")}</span>
              <span className={spanStyle}>{t("leadTimeSmall")}</span>
              <span className={spanStyle}>{t("leadTimeMiddle")}</span>
              <span className={spanStyle}>{t("leadTimeLarge")}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:my-10 desk:my-16">
        <h2 className="text-2xl text-textContacts underline ">The cost of website development with subsequent rental</h2>
        <div className="flex border-t-4 border-b-4 border-textContacts my-2 ">

            <div className="mx-10 my-2 border-r-4 border-textContacts">
                  <p className={`${cellStyle} `}>                
                <span className={spanStyle}>For small and middle business</span> 
                <span className={spanStyle}>For large business</span>
            </p>
            </div>

          

            <p className={cellStyle}>
                <span className={spanStyle}>From 20 dollars</span> 
                <span className={spanStyle}>From 100 dollars</span>
            </p>

        </div>
      </div>


    </div>
  );
};

export default PriceForTAbAndDev;
