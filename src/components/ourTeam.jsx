import Image from "next/image";
import Logo from "../../public/img/logo/dev_hawks_done-04.png";
import { useTranslations } from "next-intl";

const OurTeam = () => {
  const t = useTranslations("Team");

  return (
    <div className="px-10 my-auto relative">
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-textContacts text-5xl font-bold py-10">
          {t("title")}
        </h1>
        <div className="flex flex-row">
          <div className="w-[800px] h-[200px]">
            <p className="text-3xl font-bold text-textContacts">{t("underTitle")}</p>
            <p
              className="text-xl text-textContacts py-5"
              style={{ textAlign: "justify" }}
            >
              {t('text')}
            </p>
          </div>
          <div className="absolute top-[40%] right-[5%]">
            <Image src={Logo} alt="logo" width={400} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
