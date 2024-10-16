"use client"; 
import { useTranslations } from "next-intl";

const inputStyle = "w-[280px] h-10 border-2 border-textContacts rounded-xl pl-2 text-textContacts placeholder-textContacts";
const inputStyleSubject = "w-[580px] h-10 border-2 border-textContacts rounded-xl pl-2";
const textAreaStyle = "border-2 border-textContacts rounded-xl pl-2 pt-1";

 const ContactForm = () => {
  const t = useTranslations('ContactForm'); 

  return (
    <form>
      <h1 className="text-5xl text-textContacts font-bold mb-10">Contacts</h1>
      
      <div className="flex mx-5 my-5">
        <label htmlFor="firstName" className="mr-5">
          <input type="text" id="firstName" placeholder={t('firstName')} className={inputStyle} />
        </label>
        <label htmlFor="lastName">
          <input type="text" id="lastName" placeholder={t('lastName')} className={inputStyle} />
        </label>
      </div>

      <div className="flex mx-5 my-5">
        <label htmlFor="email" className="mr-5">
          <input type="email" id="email" placeholder="email" className={inputStyle} required />
        </label>
        <label htmlFor="phone" className="mr-5">
          <input type="text" id="phone" placeholder="phone/telegram" className={inputStyle} />
        </label>
      </div>

      <div className="flex flex-col mx-5 my-5">
        <label htmlFor="subject" className="mr-5 flex flex-col">
          <p className="pl-2">{t('subject')}*</p>
          <input type="text" id="subject" required className={inputStyleSubject} />
        </label>
      </div>

      <div className="w-[580px] ml-5">
        <label htmlFor="message" className="flex flex-col">
          <p>{t('message')}</p>
          <textarea id="message" cols="60" rows="10" className={textAreaStyle}></textarea>
        </label>

        <div className="flex mt-10 justify-center">
          <button className="w-[280px] bg-btmContacts text-center text-2xl text-secondaryTextColor font-bold rounded-2xl py-4 px-10">
            {t('contactBtm')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
