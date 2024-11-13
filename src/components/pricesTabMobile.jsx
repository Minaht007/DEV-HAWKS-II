import { useLocale, useTranslations } from "next-intl";

const titleStyle = "text-clamp text-textContacts mb-10 font-bold";
const underTitle = "text-clamp text-textContacts mb-4";

     
const rentTextStyle = "text-textContacts text-lg bg-numberBG my-3 rounded-[16px] px-2"

const PricesTabForMob = () => {
	const t = useTranslations("Prices");
	const currentLocation = useLocale();

	// const currency = () => {
	//   if (currentLocation === "en") {
	//     return "$";
	//   } else if (currentLocation === "ua") {
	//     return "грн";
	//   }
	// };

	const currency = () => ({ en: "$", ua: "грн" }[currentLocation]);

	return (
		<section className="flex flex-col items-center min-w-[320px] max-w-[767px] px-10 my-10">
			<h1 className={titleStyle}>{t("title")}</h1>
			<p className={underTitle} style={{ textAlign: "justify" }}>
				{t("underTitleOne")}
			</p>
			<p className={underTitle} style={{ textAlign: "justify" }}>
				{t("underTitleTwo")}
			</p>

			<table className="flex flex-col items-center my-4">
				<caption className="w-[320px]">
					<h2 className="text-xl text-textContacts underline mb-3">{t("tableCaption")}</h2>
				</caption>

				<thead className="flex justify-around min-w-[320px] max-w-[600px]">
					<tr>
						<th className="md:pr-20 sm:w-36 text-textContacts text-clamp">{t("tabTitleOne")}</th>
						<th className="text-textContacts text-clamp text-center">{t("tabTitleTwo")}</th>
					</tr>
				</thead>

				<tbody className="flex justify-around">
					<tr className="flex flex-col  border-textContacts border-t-2 border-b-2 bg-numberBG rounded-[16px] mr-6 ">
						<td className="border-textContacts border-r-2 md:padding-clamp mt-4 text-center text-secondaryTextColor">
							{t("typeApplicationLanding")}
						</td>
						<td className="border-textContacts border-r-2 md:padding-clamp py-2 text-center text-secondaryTextColor">
							{t("typeApplicationSmall")}
						</td>
						<td className="border-textContacts border-r-2 md:padding-clamp pb-2 text-center text-secondaryTextColor">
							{t("typeApplicationMiddle")}
						</td>
						<td className="border-textContacts border-r-2 md:padding-clamp mb-4 text-center text-secondaryTextColor">
							{t("typeApplicationLarge")}
						</td>
					</tr>
					<tr className="flex flex-col items-center justify-center border-textContacts border-t-2 border-b-2 bg-numberBG rounded-[16px]">
						<td className="text-center padding-clamp mx-auto  text-secondaryTextColor">
							{t("pricesLanding")} {currency()}
						</td>
						<td className="text-center  padding-clamp py-2 text-secondaryTextColor">
							{t("pricesSmall")} {currency()}
						</td>
						<td className="text-center  padding-clamp pb-2 text-secondaryTextColor">
							{t("pricesMiddle")} {currency()}
						</td>
						<td className="text-center  padding-clamp text-secondaryTextColor">
							{t("pricesLarge")} {currency()}
						</td>
					</tr>
				</tbody>
			</table>

			{/* Tablet For Rent */}

			<div>
        <h2 className={`${titleStyle} md:mt-10 desk:mt-16`}>
          {t("rentTitleQuestion")}
        </h2>

        <ul>
          <li className={rentTextStyle}>
            <p className="text-start pl-4 text-secondaryTextColor">
              {t("rentScripUnderTitleOne")}
            </p>
            <p className="text-secondaryTextColor text-center">{t("rentScriptOne")}</p>
			<p className="text-secondaryTextColor text-center">{t("rentScriptOneDev")}</p>
          </li>

          <li className={rentTextStyle}>
            <p className="text-start pl-4 text-secondaryTextColor">
              {t("rentScripUnderTitleTwo")}
            </p>
            <p className="text-secondaryTextColor text-center">{t("rentScriptTwoP-1")}</p>
            <p className="text-secondaryTextColor text-center">{t("rentScriptTwoP-2")}</p>
          </li>

          <li className={rentTextStyle}>
            <p className="text-start pl-4 text-secondaryTextColor">
              {t("rentScripUnderTitleThree")}
            </p>
            <p className="text-secondaryTextColor text-center">{t("rentScriptThree")}</p>
          </li>

          <li className={rentTextStyle}>
            <p className="text-start pl-4 text-secondaryTextColor">
              {t("rentScripUnderTitleFour")}
            </p>
            <p className="text-secondaryTextColor text-center">{t("rentScriptFour")}</p>
          </li>

          <li className={rentTextStyle}>
            <p className="text-start pl-4 text-secondaryTextColor">{t("conclusion")}</p>
            <p className="text-secondaryTextColor text-center">{t("conclusionScript")}</p>
          </li>
        </ul>
      </div>

			<table className="mx-5 my-10">
				<caption className="w-[320px]">
					<h2 className="text-clamp text-textContacts underline mb-3">{t("rentTitle")}</h2>
				</caption>

				<thead className="flex justify-around min-w-[320px] max-w-[600px]">
					<tr>
						<th className="pr-20 text-center text-textContacts text-clamp">{t("tabTitleOne")}</th>
						<th className="text-textContacts text-clamp">{t("tabTitleTwo")}</th>
					</tr>
				</thead>

				<tbody className="flex flex-col justify-around ">
					<tr className="flex justify-center items-center bg-numberBG rounded-[16px] mb-4 py-2">
						<td className="w-3/5 px-2 mx-auto text-secondaryTextColor">{t("rentLanding")}</td>
						<td className="flex justify-center w-2/5 px-2 text-secondaryTextColor">
							{t("priceRentLanding")} {currency()}
						</td>
					</tr>

					<tr className="flex justify-center items-center bg-numberBG rounded-[16px] py-2">
						<td className="w-3/5 px-2 mx-auto text-secondaryTextColor">
							{t("rentLargeBusiness")}{" "}
						</td>
						<td className="flex justify-center w-2/5 px-2 text-secondaryTextColor">
							{t("priceRentLarge")} {currency()}
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};
export default PricesTabForMob;
