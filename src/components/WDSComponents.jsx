import Image from "next/image";
import goodClientImg from "../../public/img/wds/clientGood2.png";
import webSiteImg from "../../public/img/wds/webSite.png";
import webAppImg from "../../public/img/wds/webApplication.jpg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const title = "textTitle-clamp font-bold py-10 px-10 text-textContacts";
const underTitle = "text-3xl font-bold py-3 px-10 text-textContacts";
const text = "text-2xl py-3 px-10 text-textContacts";
const numberStyle =
  "text-3xl font-bold text-center text-secondaryTextColor bg-numberBG rounded-full border-none w-12 h-12 flex items-center justify-center";

const Article = () => {

  const t = useTranslations('WDS')


  return (
    <div className="layout my-16">
      <div>
        <h1 className={title}>WEB DEVELOPMENT SERVICE</h1>
      </div>
      <div>
        <p className={underTitle}>
          {t('underTitle')}
        </p>
      </div>

      <div className="flex justify-between items-center mt-16 ">
        <div>
          <Image
            src={goodClientImg}
            alt="goodClient"
            width={600}
            height={400}
          />
        </div>
        <div className="">
          <p className={text} style={{ textAlign: "justify" }}>
           {t('scriptOne')}
          </p>
          <p className={text} style={{ textAlign: "justify" }}>
          {t('scriptTwo')}
          </p>
        </div>
      </div>
      <div>
        <h2 className={underTitle}>
        {t('underTitleTwo')}
        </h2>
      </div>
      <div>
        <p className={text} style={{ textAlign: "justify" }}>
        {t('scriptThree')}
        </p>
      </div>
      <h2 className={underTitle}>Website:</h2>
      <div className="flex justify-between items-center px-10">
        <p className={text} style={{ textAlign: "justify" }}>
        {t('scriptFour')}
        </p>
        <Image src={webSiteImg} alt="webSiteImg" width={600} height={400} />
      </div>

      <h2 className={underTitle}>Web application:</h2>
      <div className="flex justify-between items-center px-10">
        <Image src={webAppImg} alt="webAppImg" width={300} height={300} />

        <p className={text} style={{ textAlign: "justify" }}>
        {t('scriptFive')}
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <h2 className={underTitle}>{t('underTitleThree')}</h2>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
      {t('scriptSix')}
      </p>
      <div className="flex justify-center my-10">
        <p className={numberStyle}>1</p>
      </div>

      <div className="flex flex-col">
        <p className={text} style={{ textAlign: "justify" }}>
          <span className="text-2xl font-bold">
            SPA (Single Page Application)
          </span>{" "}
          {t('scriptSeven')}
        </p>
        <p className="text-2xl font-medium px-10">{t('textPositive')}</p>
        <ul>
          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">
              {t('underTitleFour')}
              </span>
              {t('scriptEight')}
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">{t('underTitleFive')}</span>
              {t('scriptNine')}
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">{t('underTitleSix')}</span>
              {t('scriptTen')}
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <p className="text-2xl font-medium px-10">{t('textNegative')}</p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">
              {t('underTitleSeven')}
              </span>
              {t('scriptEleven')}
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">{t('underTitleEight')}</span>
              {t('scriptTwelve')}
            </p>
          </li>
        </ul>
        <p className="text-2xl font-medium px-10">{t('whenUse')}</p>
        <p className={text} style={{ textAlign: "justify" }}>
        {t('scriptThirteen')}
        </p>
      </div>

      {/* block two */}

      <div className="flex justify-center my-10">
        <p className={numberStyle}>2</p>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
        <span className="text-2xl font-bold">MPA (Multi Page Application)</span>{" "}
        {t('scriptFourteen')}
      </p>

      <p className="text-2xl font-medium px-10">{t('textPositive')}</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleNine')}</span>
            {t('scriptFifteen')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
            {t('underTitleTen')}
            </span>
            {t('scriptSixteen')}
          </p>
        </li>
      </ul>

      <p className="text-2xl font-medium px-10">{t('textNegative')}</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleEleven')}</span>
            {t('scriptSeventeen')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
            {t('underTitleTwelve')}
            </span>
            {t('scriptEighteen')}
          </p>
        </li>
      </ul>

      <div className="flex justify-center my-10">
        <p className={numberStyle}>3</p>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
        <span className="text-2xl font-bold">
          PWA (Progressive Web Application)
        </span>{" "}
        {t('scriptNineteen')}
      </p>

      <p className="text-2xl font-medium px-10">{t('textPositive')}</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleThirteen')}</span>
            {t('scriptTwenty')}
            </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
            {t('underTitleFourteen')}
            </span>
            {t('scriptTwentyOne')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleFifteen')}</span>
            {t('scriptTwentyTwo')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleSixteen')}</span>
            {t('scriptTwentyThree')}
          </p>
        </li>
      </ul>

      <p className="text-2xl font-medium px-10">{t('textNegative')}</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleSeventeen')}</span>
            {t('scriptTwentyFour')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
            {t('underTitleEighteen')}
            </span>
            {t('underTitleEighteen')}
          </p>
        </li>

        <li>
          <p className="text-2xl font-medium px-10">{t('whenUse')}</p>
        </li>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
          {t('scriptTwentySix')}
          </p>
        </li>
      </ul>

      <div className="flex justify-center mt-20">
        <h2 className={underTitle}>{t('underTitleNineteen')}</h2>
      </div>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">CRM systems.</span>
            {t('scriptTwentySeven')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('underTitleTwenty')}</span>
            {t('scriptTwentyEight')}
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">ERP systems.</span>
            {t('scriptTwentyNine')}
          </p>
        </li>

        {/* <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">{t('scriptTwentyNine')}</span>
            {t('scriptThirty')}
          </p>
        </li> */}
      </ul>

      <div className="flex flex-col justify-center items-center mt-10 mb-20">
        <p className="text-5xl font-extrabold text-textContacts" >{t('downText')}</p>
        <p className="text-3xl font-extrabold text-textContacts pt-16" >Tap <Link href="/#contact"><span className="text-5xl font-extrabold text-btmTextColor pt-16">Contacts</span></Link> </p>
      </div>
      
    </div>
  );
};
export default Article;
