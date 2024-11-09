import ContactForm from "@/components/contactForm";
import { useTranslations } from "next-intl";

const title =
  "sm:text-xl md:text-2xl  desk:text-4xl font-bold sm:py-6 text-textContacts";

const CsServiceComponent = () => {
  const t = useTranslations("ContactUs");

  return (
    <div className="flex flex-col items-center justify-center sm:p-10 layout">
      <ContactForm />
      <h1 className={title} style={{ textAlign: "justify" }}>
        {t("slogan")}&#128512;
      </h1>
    </div>
  );
};

export default CsServiceComponent;
