import  ContactForm  from "@/components/contactForm";
import { useTranslations } from "next-intl";

const title = "sm:text-xl md:text-2xl  desk:text-4xl font-bold py-20 px-10 text-textContacts";

const CsServiceComponent = () => {
  const t = useTranslations('ContactUs')


  return (
    <div className="flex flex-col items-center justify-center py-20 layout">      
      <ContactForm/>
      <h1 className={title} style={{ textAlign: "justify" }}>
        {t('slogan')}&#128512;
      </h1>
    </div>
  );
};

export default CsServiceComponent;
