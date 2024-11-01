import analitycsImg from "../../public/img/wps/analytics.jpg";
import designImg from "../../public/img/wps/design2.jpg";
// import arrowImg from "../../public/img/wps/arrowDown.png"
import dev2Img from "../../public/img/wps/dev2.jpg";
import testingImg from "../../public/img/wps/testing-1.jpg";
import supportImg from "../../public/img/wps/support.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const title = "text-4xl font-bold py-6 text-textContacts";
const underTitle = "text-3xl font-bold py-3 text-textContacts";
const text = "text-2xl py-3 text-textContacts";
const stepText = "text-2xl py-3 desk:px-4 text-textContacts";
const numberStyle =
  "text-3xl font-bold text-center text-secondaryTextColor bg-numberBG rounded-full border-none w-12 h-12 flex items-center justify-center";
const imgDivStyle =
  "flex sm:flex-col md:flex-col desk:flex-row sm:items-center md:items-start  desk:items-center sm:justify-center md:justify-start desk:justify-center";
const WpsComponents = () => {
  const t = useTranslations("WPSComponent");

  return (
    <div className="relative bg-bgColor px-10">
      <div>
        <h1 className={title}>{t("title")}</h1>
        <h2 className={underTitle}>{t("introduction")}</h2>
      </div>

      <div>
        <p className={text}>{t("paragraph-1")}</p>
        <p className={text}>{t("paragraph-2")}</p>
      </div>

      <div className="py-16">
        <div className="flex flex-col pr-3 justify-center">
          <p className={numberStyle}>1</p>
        </div>

        <div className={imgDivStyle}>
          <Image
            src={analitycsImg}
            alt="analitic"
            width={300}
            height={400}
            className="rounded-md"
          />
          <div className="flex flex-col pl-6">
            <p className={underTitle}>{t("step-1")}</p>
            <p
              className={`${stepText} text-start`}
              style={{ textAlign: "justify" }}
            >
              {t("paragraph-3")}
            </p>
          </div>
        </div>

        <div className="flex flex-col pr-3 my-6 justify-center">
          <p className={numberStyle}>2</p>
        </div>
        <div className={imgDivStyle}>
          <Image
            src={designImg}
            alt="designImg"
            width={300}
            height={400}
            className="rounded-md mx-auto"
          />
          <div className="flex flex-col pl-6">
            <p className={underTitle}>{t("step-2")}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t("paragraph-4")}
            </p>
          </div>
        </div>

        <div className="flex flex-col pr-3 justify-center my-6 py-3">
          <p className={numberStyle}>3</p>
        </div>
       
          <div className={imgDivStyle}>
            <Image
              src={dev2Img}
              alt="dev2Img"
              width={300}
              height={400}
              className="rounded-md "
            />

            <div className="flex flex-col pl-6">
              <p className={underTitle}>{t("step-3")}</p>
              <p
                className={`${stepText} text-end`}
                style={{ textAlign: "justify" }}
              >
                {t("paragraph-5")}
              </p>
            </div>
          </div>
        

        <div className="flex flex-col pr-3 justify-center my-6 py-3">
          <p className={numberStyle}>4</p>
        </div>
        <div className={imgDivStyle}>
          <Image
            src={testingImg}
            alt="testingImg"
            width={200}
            height={200}
            className="rounded-md w-[400px] h-[250px]"
          />

          <div className="flex flex-col my-3 pl-6">
            <p className={underTitle}>{t("step-4")}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t("paragraph-6")}
            </p>
          </div>
        </div>

        <div className="flex flex-col pr-3 justify-center my-6 py-3">
            <p className={numberStyle}>5</p>
          </div>

        
          <div className={imgDivStyle}>
            <Image
              src={supportImg}
              alt="supportImg"
              width={250}
              height={300}
              className="rounded-md mx-auto"
            />

            <div className="flex flex-col pl-6">
            <p className={underTitle}>{t("step-5")}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t("paragraph-7")}
            </p>
            </div>
           
          </div>
          
       
      </div>
    </div>
  );
};

export default WpsComponents;
