import { useTranslations } from "next-intl";

const svgStyle = "sm:w-8 sm:h-8 md:w-10 md:h-10 desk:w-16 desk:h-16 md:mx-2 md:my-2";
const textStyle = "sm:text-center md:text-xl desk:text-2xl font-bold px-1 md:text-start  mb-4";
const divStyle = "flex flex-col items-center justify-between w-full desk:w-auto";

const Advantage = () => {
	const t = useTranslations("ADV");

	return (
		<div className="flex justify-end">
			<div className="flex   sm:flex-wrap md:flex-wrap desk:flex-row justify-between w-[85%] relative mt-[-4%] py-10 px-5 border-none rounded-l-2xl bg-[#f8fafc] ">
				<div className={`${divStyle} w-full sm:w-1/2 md:w-1/2 desk:w-auto`}>
					<div>
						<svg className={svgStyle}>
							<use
								xlinkHref="/img/icons/symbol-defs.svg#icon-bestPerfomens"
								className="fill-[#0c4a6e]"
							/>
						</svg>
					</div>
					<p className={textStyle}>{t("adv1")}</p>
				</div>

				<div className={`${divStyle} w-full  sm:w-1/2 md:w-1/2 desk:w-auto`}>
					<div>
						<svg className={svgStyle}>
							<use xlinkHref="/img/icons/symbol-defs.svg#icon-clock" className="fill-[#0c4a6e]" />
						</svg>
					</div>
					<p className={textStyle}>{t("adv2")}</p>
				</div>

				<div className={`${divStyle} w-full  sm:w-1/2 md:w-1/2 desk:w-auto`}>
					<div>
						<svg className={svgStyle}>
							<use
								xlinkHref="/img/icons/symbol-defs.svg#icon-satisfection"
								className="fill-[#0c4a6e]"
							/>
						</svg>
					</div>
					<p className={textStyle}>{t("adv3")}</p>
				</div>

				<div className={`${divStyle} w-full  sm:w-1/2 md:w-1/2 desk:w-auto`}>
					<div>
						<svg className={svgStyle}>
							<use xlinkHref="/img/icons/symbol-defs.svg#icon-people" className="fill-[#0c4a6e]" />
						</svg>
					</div>
					<p className={textStyle}>{t("adv4")}</p>
				</div>
			</div>
		</div>
	);
};

export default Advantage;
