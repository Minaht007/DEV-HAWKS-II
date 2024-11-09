"use client";
import Image from "next/image";
import Img from "../../public/img/chooseUs/chooseUs.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const cardStyle =
	"flex flex-col bg-textContacts rounded-xl sm:w-[300px] md:w-[360px] md:h-[400px] desk:w-[360px]  ";
const svgStyles = "mt-10 md:w-28 desk:w-36 mx-auto";
const useStyle = "w-10 h-10 fill-secondaryTextColor py-10";
const cardTitle =
	"md:text-2xl desk:text-3xl font-bold text-secondaryTextColor px-5 pt-4 text-center";
const cartText = "md:text-xl font-bold text-secondaryTextColor px-5 text-center";
const cardBtm =
	"flex flex-row w-60 sm:px-2 md:w-48  desk:w-[240px] text-xl text-center justify-center py-3 bg-btmContacts text-secondaryTextColor rounded-md  md:bottom-4  mx-auto my-10";
const numberStyles =
	"sm:text-md desk:text-2xl text-secondaryTextColor font-bold flex justify-center items-center sm:w-6 sm:h-6 desk:w-8 desk:h-8 border-none rounded-full bg-numberBG";
const pointContainerStyle =
	"sm:min-w-[250px] sm:max-w-[600px] sm:px-10 sm:pl-2 desk:pl-4 desk:w-[800px]";
const pointTitleStyle =
	"sm:text-start sm:text-xl md:text-3xl desk:text-4xl font-bold sm:pb-2 md:pb-4 desk:pb-6  ";
const pointTextStyle = "flex flex-wrap sm:text-start sm:text-lg md:text-xl md:w-[600px] desk:text-xl pb-10  ";

const Services = () => {
	const t = useTranslations("Services");
	const currentLocation = useLocale();

	return (
		<div
			className="bg-bgColor w-full sm:py-8 md:py-12 desk:py-16  desk:px-10 rounded-l-2xl layout"
			id="services"
		>
			<h1 className="sm:text-3xl md:text-4xl desk:text-5xl font-bold text-textContacts text-center">
				{t("title")}
			</h1>

			<div className="flex w-full sm:flex-col md:flex-row px-10   sm:justify-around justify-between items-center mx-auto sm:mt-10 md:mt-16 desk:mt-20">
				<p className="sm:w-full md:w-[510px] sm:text-center md:text-start desk:w-[510px] sm:text-xl  md:text-2xl desk:text-5xl font-bold leading-relaxed sm:px-0 md:px-10 sm:mb-4 md:mb-0">
					{t("underTitle")}
				</p>
				<p
					className=" md:w-[500px] desk:w-[710px] sm:text-md md:text-xl desk:text-3xl leading-normal"
					style={{ textAlign: "justify" }}
				>
					{t("underTitleSlogan")}
				</p>
			</div>

			{/* cards */}
			<div className="my-12  flex  sm:flex-wrap md:flex-wrap desk:flex-row md:justify-center sm:gap-5 desk:gap-10  justify-around items-center">
				<div className={cardStyle}>
					<svg className={svgStyles}>
						<use href="/img/icons/symbol-defs.svg#icon-webEarth" className={useStyle} />
					</svg>
					<p className={cardTitle}>Web Development</p>
					<p className={cartText}>{t("serviceCard1")}</p>
					<Link href={`/${currentLocation}/webDevelopmentService`} className={cardBtm}>
						{t("serviceCardBtm")}
					</Link>
				</div>

				<div className={cardStyle}>
					<svg className={svgStyles}>
						<use href="/img/icons/symbol-defs.svg#icon-structure" className={useStyle} />
					</svg>
					<p className={cardTitle}>Programming</p>
					<p className={cartText}>{t("serviceCard2")}</p>
					<Link href={`/${currentLocation}/wps`} className={cardBtm}>
						{t("serviceCardBtm")}
					</Link>
				</div>

				<div className={cardStyle}>
					<svg className={svgStyles}>
						<use href="/img/icons/symbol-defs.svg#icon-update" className={useStyle} />
					</svg>
					<p className={cardTitle}>Consultation</p>
					<p className={cartText}>{t("serviceCard3")}</p>
					<Link href={`/${currentLocation}/consultationService`} className={cardBtm}>
						{t("serviceCardBtm")}
					</Link>
				</div>
			</div>

			{/* Why choose us */}

			<div className="flex bg-bgColor sm:my-2 desk:my-5  rounded-l-2xl  md:w-full  ">
				<div className="sm:text-center w-full sm:px-10 ">
					<h2 className="sm:text-3xl md:text-4xl desk:text-5xl font-bold text-textContacts text-center ">
						{t("serviceTitle2")}
					</h2>
					<p className="sm:w-full sm:text-xl md:text-3xl desk:text-4xl font-bold sm:py-4 md:py-10">
						{t("serviceUnderTitle2")}
					</p>
					<p
						className="flex flex-wrap w-full  sm:text-xl md:text-2xl desk:text-3xl pb-10"
						style={{ textAlign: "justify" }}
					>
						{t("serviceTextOne")}
					</p>

					<div className="desk:flex desk:justify-between">
						<div>
							<div className="flex items-start ">
								<div className="">
									<p className={numberStyles}>1</p>
								</div>
								<div className={pointContainerStyle}>
									<p className={pointTitleStyle}>{t("servicePointOne")}</p>
									<p className={pointTextStyle}>{t("serviceTextThree")}</p>
								</div>
							</div>

							<div className="flex items-start ">
								<div className="">
									<p className={numberStyles}>2</p>
								</div>
								<div className={pointContainerStyle}>
									<p className={pointTitleStyle}>{t("servicePointTwo")}</p>
									<p className={pointTextStyle}>{t("serviceTextFour")}</p>
								</div>
							</div>

							<div className="flex items-start ">
								<div className="">
									<p className={numberStyles}>3</p>
								</div>
								<div className={pointContainerStyle}>
									<p className={pointTitleStyle}>{t("servicePointThree")}</p>
									<p className={pointTextStyle}>{t("serviceTextFive")}</p>
								</div>
							</div>
						</div>

						<Image
							src={Img}
							alt="img"
							className="desk:w-[500px] desk:h-[500px]  sm:hidden md:hidden desk:block "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
