import Image from "next/image";
import map from "../../public/img/contacts/centralPartPng.png";
import ContactForm from "@/components/contactForm";

const Contacts = () => {
  return (
    <section
      className="flex w-full justify-between items-center py-20 bg-bgColor pl-10 rounded-l-xl"
      id="contact relative layout"
    >
      <ContactForm />
      <div className="sm:hidden md:block desk:visible md:min-w-[600px] md:max-w-[100%]">
        <Image
          src={map}
          alt="map"
          width={800}
          height={940}
          className="rounded-md md:w-1/2 md:max-w-full md:opacity-100 desk:w-[700px] desk:opacity-100 absolute md:bottom-[4%] desk:bottom-[2%] right-0"
        />
      </div>
    </section>
  );
};

export default Contacts;
