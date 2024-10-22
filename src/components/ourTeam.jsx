import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-04.png";
import LogoTabAndMobil from "../../public/img/logo/dev_hawks_done-03.png";
import { useTranslations } from "next-intl";

const OurTeam = () => {
  const t = useTranslations("Team");

  return (
    <div className="sm:py-10 px-10 my-auto relative">
      <div className="flex flex-col justify-center w-full">
        <h1 className="sm:text-center md:text-4xl desk:text-5xl font-bold text-textContacts md:text-center md:py-6 desk:py-10">
          {t("title")}
        </h1>
        <div className="flex flex-row sm:justify-center sm:flex-col md:flex-col">
        <div className="desk:absolute sm:mx-auto md:mx-auto desk:top-[40%] desk:right-[5%]">
            <Image src={Logo} alt="logo" width={400} height={60} className="sm:hidden md:hidden desk:block" />
            <Image src={LogoTabAndMobil} alt="logo" width={60} height={60} className="visibility desk:hidden w-40" />
          </div>

          <div className="md:w-full desk:w-[700px] desk:h-[200px]">
            <p className="md:text-2xl desk:text-3xl md:text-center font-bold text-textContacts">{t("underTitle")}</p>
            <p
              className="text-xl text-textContacts py-5"
              style={{ textAlign: "justify" }}
            >
              {t('text')}
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
