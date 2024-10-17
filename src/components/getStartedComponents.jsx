"use client"
import { useTranslations } from "next-intl";

const titleStyle = "text-5xl px-4 pt-16 text-textContacts";
const underTitleStyle = "text-xl font-bold py-5 px-10 text-textContacts";
const labelStyle = "flex flex-col py-4 text-textContacts pb-2";
const inputStyle =
  " py-2 pl-2 w-4/5 mt-1 border-2 rounded-md border-textContacts bg-secondaryBG text-textContacts";
const blockStyle = "text-xl font-bold my-10 text-textContacts";

const Brief = () => {

  const t = useTranslations('GetStarted')


  return (
    <div className="flex flex-col items-center py-16">
      <div>
        <h1 className={titleStyle}>
          {t('title1')}
        </h1>
      </div>
      <div>
        <p className={underTitleStyle}>
        {t('title2')}
        </p>
        <p className={underTitleStyle}>
        {t('title3')}
        </p>
        <p className={underTitleStyle}>
        {t('title4')}
        </p>
      </div>

      <form className="flex flex-col ">
        <p className={blockStyle}>Block one</p>

        <label htmlFor="" className={labelStyle}>
        {t('label1')}
          <input
            type="text"
            placeholder="type you name"
            required
            min={3}
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label2')}
          <input
            type="text"
            placeholder={t('getStartedPlaceholder')}
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label3')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label4')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label5')} <br/> {t('label5-2')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label6-1')}
          <br />
          {t('label6-2')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        {/* _________________________________________________________________________________ */}
        <p className={blockStyle}>Block two</p>

        <label htmlFor="" className={labelStyle}>
        {t('label7')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="10"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label8')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="10"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label10')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="4"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label11')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="4"
            className={inputStyle}
          />
        </label>        

        <label htmlFor="" className={labelStyle}>
        {t('label12')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label13')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label14')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        {/* <label htmlFor="" className={labelStyle}>
        {t('label11')}
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label> */}

        <label htmlFor="" className={labelStyle}>
        {t('label15')}
          <input type="text" placeholder={t('getStartedPlaceholder')} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label16')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label17')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label18')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label19')}
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label20')}
          <input
            type="text"
            placeholder={t('getStartedPlaceholder')}
            className={inputStyle}
          />
        </label>
        {/* _________________________________________________________________________ */}
        <p className={blockStyle}>Block three</p>
        <h2 className={underTitleStyle}>{t('blockTreeTitle')}</h2>

        <label htmlFor="" className={labelStyle}>
        {t('blockTreeUnderTitle')}
          <div className="flex flex-col">
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2 " /> {t('check-1')}
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> {t('check-2')}
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> {t('check-3')}
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> {t('check-4')}
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> {t('check-5')}
            </div>
            <input
              type="text"
              placeholder={t('blockThreeInputPlaceholder')}
              className={inputStyle}
            />
          </div>
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label-21')}
          <div className="flex flex-col">
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2 " /> {t('check-6')}
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> {t('check-7')}
            </div>
          </div>
        </label>

        <label htmlFor="" className={labelStyle}>
        {t('label-22')}
          tell us.
          <textarea
            type="text"
            placeholder={t('getStartedPlaceholder')}
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>
      </form>
    </div>
  );
};

export default Brief;
