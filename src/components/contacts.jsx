import Image from "next/image";
import map from "../../public/img/contacts/centralPartPng.png";
import ContactForm from "@/components/contactForm";

const Contacts = () => {
  return (
    <section
      className="flex w-full justify-between items-center sm:py-10 bg-bgColor px-10 rounded-l-xl relative layout"
      id="contact" 
    >
      <ContactForm />
      <div className="sm:hidden  desk:block  md:max-w-[600px] desk:ml-5">
        <Image
          src={map}
          alt="map"
        
          className="rounded-md  desk:w-[600px] desk:opacity-100  w-[600px] h-[480px]"
        />
      </div>
    </section>
  );
};

export default Contacts;
