import analitycsImg from "../../public/img/wps/analytics.jpg"
import designImg from "../../public/img/wps/design2.jpg"
// import arrowImg from "../../public/img/wps/arrowDown.png"
import dev2Img from "../../public/img/wps/dev2.jpg"
import testingImg from "../../public/img/wps/testing-1.jpg"
import supportImg from "../../public/img/wps/support.jpg"
import Image from "next/image"
import { useTranslations } from "next-intl"





const title = "text-5xl font-bold py-10 px-10 text-textContacts";
const underTitle = "text-3xl font-bold py-3 px-10 text-textContacts";
const text = "text-2xl py-3 px-10 text-textContacts";
const stepText = "text-2xl py-3 px-10 text-textContacts";
const numberStyle =
  "text-3xl font-bold text-center text-secondaryTextColor bg-numberBG rounded-full border-none w-12 h-12 flex items-center justify-center";

const WpsComponents = () => {

  const t = useTranslations('WPSComponent')


  return (
    <div className="relative bg-bgColor">
      <div>
        <h1 className={title}>WEB PROGRAMMING SERVICE</h1>
        <h2 className={underTitle}>
         {t('introduction')}
        </h2>
      </div>

      <div>
        <p className={text}>
        {t('paragraph-1')}
        </p>
        <p className={text}>
        {t('paragraph-2')}
        </p>
      </div>

      <div className="py-16">
        <div className="flex w-full relative">
          <div className="flex-col items-start w-2/3">
            <Image src={analitycsImg} alt="analitic" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>{t('step-1')}</p>
            <p
              className={`${stepText} text-start`}
              style={{ textAlign: "justify" }}
            >
              {t('paragraph-3')}
            </p>
          </div>

          <div className="flex flex-col  justify-center absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>1</p>           
          </div>
        </div>

        <div className="flex justify-end py-20  w-full relative">
          <div className="flex-col w-2/3">
          <Image src={designImg} alt="designImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>{t('step-2')}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
             {t('paragraph-4')}
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>2</p>
          </div>
        </div>

        <div className="flex justify-start w-full relative">
          <div className="flex-col w-2/3">
          <Image src={dev2Img} alt="dev2Img" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>{t('step-3')}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t('paragraph-5')}
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>3</p>
          </div>
        </div>

        <div className="flex justify-end w-full relative">
          <div className="flex-col w-2/3">
          <Image src={testingImg} alt="testingImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>{t('step-4')}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t('paragraph-6')}
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>4</p>
          </div>
        </div>

        <div className="flex justify-start w-full relative">
          <div className="flex-col w-2/3">
          <Image src={supportImg} alt="supportImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>{t('step-5')}</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              {t('paragraph-7')}
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpsComponents;
