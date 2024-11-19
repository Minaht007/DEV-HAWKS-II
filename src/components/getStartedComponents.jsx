"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import sendEmail from "./fetchFunction";

const titleStyle = "sm:text-3xl md:text-4xl desk:text-5xl px-4 pt-16 text-textContacts font-bold";
const underTitleStyle = "text-xl font-bold py-5 px-10 text-textContacts";
const labelStyle = "flex flex-col py-4 text-textContacts pb-2";
const inputStyle =
	" py-2 pl-2 w-4/5 mt-1 border-2 rounded-md border-textContacts bg-secondaryBG text-textContacts";
const blockStyle = "text-xl font-bold sm:my-4 md:my-6 desk:my-10 text-textContacts";

const Brief = () => {
	const [briefData, setBriefData] = useState({});
	const formRef = useRef(null);

	const templateMassage = `
  1.Ваше ім'я:${briefData?.name || ""}; 
  2.Назва вашої компанії:${briefData?.company || ""}; 
  3.Розкажіть детальніше про бізнес:${briefData?.aboutBusiness || ""}; 
  4.Розкажіть про конкурентні переваги вашого бренду, продукту чи послуги:${
		briefData?.aboutBrend || ""
	}; 
  5.Опишіть, що вам подобається, а що ні на сайтах конкурентів:${briefData?.competitors || ""}; 
  6.Завдання сайту:${briefData?.webAppMission || ""}; 
  7.У вас зараз є веб-сайт? Що вам в ньому подобається і що не подобається:${
		briefData?.likeOrDislikeYourWebApp || ""
	}; 
  8.Хто ваша цільова аудиторія:${briefData?.yourTarget || ""}; 
  9.Якщо є додаткові цілі сайту, вкажіть їх:${briefData?.additionalTarget || ""}; 
  10.Перелічіть основні пункти навігаційного меню сайту:${briefData?.webSiteNavigation || ""}; 
  11.Розкажіть більше про бізнес:${briefData?.moreAboutBusiness || ""}; 
  12.Які основні розділи має містити сайт:${briefData?.meinPageYourApp || ""}; 
  13.Вкажіть ключові сервіси сайту - форми заявок та інше:${briefData?.meinServiseYourApp || ""}; 
  14.Які функції потрібно реалізувати на головній сторінці:${briefData?.meinPageFunction || ""}; 
  15.Які загалом функції ви хотіли б включити в сайт:${briefData?.appFunction || ""}; 
  16.Чи потрібне підключення аналітики та налаштування відстеження конверсій з сайту:${
		briefData?.analysts || ""
	}; 
  17.Які у вас ще вимоги до сайту:${briefData?.requirements || ""}; 
  18.У вас є домен для вашого сайту чи вам потрібно його купити:${briefData?.aboutDomen || ""}; 
  19.Яка приблизна періодичність оновлення інформації на сайті:${
		briefData?.informationApdate || ""
	}; 
  19.1. Інше:${briefData?.informationApdateOtherVariant || ""} 
  20.Ваш майбутній веб-сайт потребує технічної підтримки та підтримки:${
		briefData?.technicalSupport || ""
	}; 
  21.Якщо у вас є додаткова інформація, яка буде для нас корисною, будь ласка, повідомте нам:${
		briefData?.additionalInformation || ""
	};`;

	const t = useTranslations("GetStarted");
	const c = useTranslations("Footer");

	const onChangeInput = (e) => {
		const { id, value } = e.target;
		setBriefData((prevUserData) => ({ ...prevUserData, [id]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			to: "dr.andrii.telnov@gmail.com",
			subject: "DEV-HAWKS Brief",
			text: templateMassage,
		};
		await sendEmail(data);
		setBriefData({});
		if (formRef.current) {
			formRef.current.reset();
		}
	};

	return (
		<div className="flex flex-col items-center sm:my-4 md:my-8 desk:my-16 mx-5">
			<div>
				<h1 className={titleStyle}>{t("title1")}</h1>
			</div>
			<div>
				<p className={underTitleStyle} style={{ textAlign: "justify" }}>
					{t("title2")}
				</p>
				<p className={underTitleStyle} style={{ textAlign: "justify" }}>
					{t("title3")}
				</p>
				<p className={underTitleStyle} style={{ textAlign: "justify" }}>
					{t("title4")}
				</p>
			</div>

			<form className="flex flex-col " ref={formRef} onSubmit={handleSubmit}>
				<p className={blockStyle}>Block one</p>
				<label htmlFor="" className={labelStyle}>
					{t("label1")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						required
						min={3}
						id="name"
						onChange={onChangeInput}
						className={inputStyle}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label2")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="company"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label3")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="aboutBusiness"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label4")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="aboutBrend"
						onChange={onChangeInput}
					/>
				</label>
				{/* <label htmlFor="" className={labelStyle}>
					{t("label5")} <br /> {t("label5-2")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="brend"
						onChange={onChangeInput}
					/>
				</label> */}
				<label htmlFor="" className={labelStyle}>
					{t("label6-1")}
					<br />
					{t("label6-2")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="competitors"
						onChange={onChangeInput}
					/>
				</label>
				{/* _________________________________________________________________________________ */}
				<p className={blockStyle}>Block two</p>
				<label htmlFor="" className={labelStyle}>
					{t("label7")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="10"
						className={inputStyle}
						id="webAppMission"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label8")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="10"
						className={inputStyle}
						id="likeOrDislikeYourWebApp"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label10")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="4"
						className={inputStyle}
						id="yourTarget"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label11")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="4"
						className={inputStyle}
						id="additionalTarget"
						onChange={onChangeInput}
					/>
				</label>

				<label htmlFor="" className={labelStyle}>
					{t("label12")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="webSiteNavigation"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label13")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="moreAboutBusiness"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label14")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="meinPageYourApp"
						onChange={onChangeInput}
					/>
				</label>
				{/* <label htmlFor="" className={labelStyle}>
        {t('label11')}
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label> */}
				<label htmlFor="" className={labelStyle}>
					{t("label15")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="meinServiseYourApp"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label16")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="meinPageFunction"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label17")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="appFunction"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label18")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="analysts"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label19")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="requirements"
						onChange={onChangeInput}
					/>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label20")}
					<input
						type="text"
						placeholder={t("getStartedPlaceholder")}
						className={inputStyle}
						id="aboutDomen"
						onChange={onChangeInput}
					/>
				</label>
				{/* _________________________________________________________________________ */}
				<p className={blockStyle}>Block three</p>
				<h2 className={underTitleStyle}>{t("blockTreeTitle")}</h2>
				<label htmlFor="" className={labelStyle}>
					{t("blockTreeUnderTitle")}
					<div className="flex flex-col">
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2 "
								value="Раз на тиждень"
								checked={briefData.informationApdate === "Раз на тиждень"}
								id="informationApdate"
								onChange={onChangeInput}
							/>{" "}
							{t("check-1")}
						</div>
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2"
								value="Раз в місяць"
								checked={briefData.informationApdate === "Раз в місяць"}
								id="informationApdate"
								onChange={onChangeInput}
							/>{" "}
							{t("check-2")}
						</div>
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2"
								value="Раз в півроку"
								checked={briefData.informationApdate === "Раз в півроку"}
								id="informationApdate"
								onChange={onChangeInput}
							/>{" "}
							{t("check-3")}
						</div>
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2"
								value="Раз на рік"
								checked={briefData.informationApdate === "Раз на рік"}
								id="informationApdate"
								onChange={onChangeInput}
							/>{" "}
							{t("check-4")}
						</div>
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2"
								value="Інше"
								checked={briefData.informationApdate === "Інше"}
								id="informationApdate"
								onChange={onChangeInput}
							/>{" "}
							{t("check-5")}
						</div>
						<input
							type="text"
							placeholder={t("blockThreeInputPlaceholder")}
							className={inputStyle}
							hidden={briefData.informationApdate !== "Інше"}
							id="informationApdateOtherVariant"
							onChange={onChangeInput}
						/>
					</div>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label-21")}
					<div className="flex flex-col">
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2 "
								value="yes"
								checked={briefData.technicalSupport === "yes"}
								id="technicalSupport"
								onChange={onChangeInput}
							/>{" "}
							{t("check-6")}
						</div>
						<div className="flex items-center text-xl">
							<input
								type="checkbox"
								className="mr-2"
								value="no"
								checked={briefData.technicalSupport === "no"}
								id="technicalSupport"
								onChange={onChangeInput}
							/>{" "}
							{t("check-7")}
						</div>
					</div>
				</label>
				<label htmlFor="" className={labelStyle}>
					{t("label-22")}
					<textarea
						type="text"
						placeholder={t("getStartedPlaceholder")}
						cols="30"
						rows="3"
						className={inputStyle}
						id="additionalInformation"
						onChange={onChangeInput}
					/>
				</label>
				<div className="w-4/5 flex justify-center mt-6 ">
					<button className="text-lg  text-secondaryTextColor sm:px-8 md:px-12 desk:px-16 py-3 font-bold bg-numberBG rounded-lg pointer">
						{c("footerBtm")}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Brief;
