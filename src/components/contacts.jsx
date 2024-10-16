
import Image from "next/image"
import map from "../../public/img/contacts/centralPartPng.png"
import ContactForm from "@/components/contactForm"

const Contacts = () => {

    return (
        <section className="flex justify-between py-20 bg-bgColor pl-10 rounded-l-xl" id="contact">
           <ContactForm/>
            <div>
                <Image src={map} alt="map" width={800} height={940} className="rounded-md" />
            </div>
        </section>
    )

}

export default Contacts