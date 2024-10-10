import { ContactForm } from "@/components/contactForm";

const title = "text-4xl font-bold py-20 px-10 text-textContacts";

const CsServiceComponent = () => {
  return (
    <div className="flex justify-center py-20 layout">
      <h1 className={title} style={{ textAlign: "justify" }}>
        Leave your question and contacts and we are answer in nearest time&#128512;
      </h1>
      {ContactForm}
    </div>
  );
};

export default CsServiceComponent;
