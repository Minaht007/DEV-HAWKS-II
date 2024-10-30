import { useLocale, useTranslations } from "next-intl";

const titleStyle = "text-5xl text-textContacts mb-10";
const underTitle = "text-3xl text-textContacts mb-10";
const cellStyle =
  "flex flex-col items-center justify-center text-center md:px-6 desk:px-10 md:mx-2 desk:mx-6 my-2 md:min-text-base md:max-text-lg desk:text-2xl text-secondaryTextColor bg-numberBG rounded-[32px] ";
const cellContainer = "flex flex-col";
const centralCellContainer = "flex flex-col items-around border-textContacts";
const spanStyle = "py-5 px-10";
const tabTitleStyle = "text-center text-2xl font-bold text-textContacts";

const PriceForTAbAndDev = () => {
  const t = useTranslations("Prices");
  const currentLocation = useLocale();

  const currency = () => {
    if (currentLocation === "en") {
      return "$";
    } else if (currentLocation === "ua") {
      return "грн";
    }
  };

  return (
    <div className=" md:my-10 desk:my-16 md:mx-10 desk:px-16">
      <h1 className={titleStyle}>{t("title")}</h1>
      <p className={underTitle} style={{textAlign: "justify"}}>{t("underTitleOne")}</p>
      <p className={underTitle} style={{textAlign: "justify"}}>{t("underTitleTwo")}</p>

      <h2 className="text-2xl text-textContacts underline mb-6 ">
        {t("tableCaption")}
      </h2>
      <div className="flex flex-col justify-around items-center w-full">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <h2 className={tabTitleStyle} style={{ whiteSpace: "nowrap" }}>
              {t("tabTitleOne")}
            </h2>
            <div
              className={`${cellContainer} mb-4 border-textContacts border-t-2 border-b-2`}
            >
              <p className={cellStyle}>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("typeApplicationLanding")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("typeApplicationSmall")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("typeApplicationMiddle")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("typeApplicationLarge")}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className={tabTitleStyle}>{t("tabTitleTwo")}</h2>
            <div
              className={`${centralCellContainer} mb-4 border-textContacts border-t-2 border-b-2`}
            >
              <p className={cellStyle}>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("pricesLanding")} {currency()}{" "}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("pricesSmall")} {currency()}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("pricesMiddle")} {currency()}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("pricesLarge")} {currency()}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className={tabTitleStyle} style={{ whiteSpace: "nowrap" }}>
              {t("tabTitleThree")}
            </h2>
            <div
              className={`${cellContainer} mb-4 border-textContacts border-t-2 border-b-2`}
            >
              <p className={cellStyle}>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("leadTimeLanding")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("leadTimeSmall")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("leadTimeMiddle")}
                </span>
                <span className={spanStyle} style={{ whiteSpace: "nowrap" }}>
                  {t("leadTimeLarge")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:my-10 desk:mb-16 desk:mt-28">
        <div className="flex justify-start text-start mb=6">
           <h2 className="text-start text-2xl text-textContacts underline ">
          {t("rentTitle")}
        </h2> 
        </div>
        
        <div className="flex border-t-2 border-b-2 border-textContacts ">
          <div className="mx-10 my-2 border-r-4 border-textContacts">
            <p className={`${cellStyle} `}>
              <span className={spanStyle}>{t("rentLanding")}</span>
              <span className={spanStyle}>{t("rentLargeBusiness")}</span>
            </p>
          </div>

          <p className={cellStyle}>
            <span className={spanStyle}>
              {t("priceRentLanding")} {currency()}
            </span>
            <span className={spanStyle}>
              {t("priceRentLarge")} {currency()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceForTAbAndDev;
