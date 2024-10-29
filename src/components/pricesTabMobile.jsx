import { useTranslations } from "next-intl";

const PricesTabForMob = () => {
  const t = useTranslations("Prices");

  return (
    <div className="max-w-[767px]">
      <table className="flex flex-col items-center justify-center my-10">
        <caption className="w-[400px]">
          <h2 className="text-xl text-textContacts">{t("tableCaption")}</h2>
        </caption>

        <thead className="flex justify-around min-w-[400px] max-w-[600px]">
          <tr>
            <th className="pr-20 text-center text-textContacts text-[clamp(1rem, 2vw + 1rem, 3rem)]">{t("tabTitleOne")}</th>
            <th className="text-textContacts text-[clamp(1rem, 2vw + 1rem, 3rem)]" >{t("tabTitleTwo")}</th>
          </tr>
        </thead>

        <tbody className="flex justify-around">
          <tr className="flex flex-col  border-textContacts border-t-2 border-b-2 bg-numberBG rounded-[16px] mx-6 ">
            <td className="border-textContacts border-r-2 px-4 mt-4 text-center text-secondaryTextColor" >{t("typeApplicationLanding")}</td>
            <td className="border-textContacts border-r-2 px-4 py-2 text-center text-secondaryTextColor">{t("typeApplicationSmall")}</td>
            <td className="border-textContacts border-r-2 px-4 pb-2 text-center text-secondaryTextColor">{t("typeApplicationMiddle")}</td>
            <td className="border-textContacts border-r-2 px-4 mb-4 text-center text-secondaryTextColor">{t("typeApplicationLarge")}</td>            
          </tr>
          <tr className="flex flex-col items-center justify-center border-textContacts border-t-2 border-b-2 bg-numberBG rounded-[16px]">
            <td className="text-center mx-auto min-w-[100px] max-w-[150px] text-secondaryTextColor">{t("pricesLanding")}</td>
            <td className="text-center mx-auto min-w-[100px] py-2 max-w-[150px] text-secondaryTextColor">{t("pricesSmall")}</td>
            <td className="text-center mx-auto min-w-[100px] pb-2 max-w-[150px] text-secondaryTextColor">{t("pricesMiddle")}</td>
            <td className="text-center mx-auto min-w-[100px] max-w-[150px] text-secondaryTextColor">{t("pricesLarge")}</td>            
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PricesTabForMob;

{
  /* <div className="flex mx-4 min-w-[400px] max-w-[700px]">
<div className="w-2/3">
    <p>{t('typeApplicationLanding')} <br/> {t('leadTimeLanding')}</p>
    <p>{t('typeApplicationSmall')} <br/> {t('leadTimeLanding')}</p>
    <p>{t('typeApplicationMiddle')} <br/> {t('leadTimeLanding')}</p>
    <p>{t('typeApplicationLarge')} <br/> {t('leadTimeLanding')}</p>
</div>

<div className="1/3 px-4">
    <p>{t('pricesLanding')}</p>
    <p className="my-3"></p>
    <p>{t('pricesSmall')}</p>
    <p className="my-3"></p>
    <p>{t('pricesMiddle')}</p>
    <p className="my-3"></p>
    <p>{t('pricesLarge')}</p>
</div>


</div> */
}
