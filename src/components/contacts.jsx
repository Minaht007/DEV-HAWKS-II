
import Image from "next/image"
import map from "../../public/img/contacts/centralPartPng.png"


const inputStyle = "w-[280px] h-10 border-2 border-textContacts rounded-xl pl-2"
const inputStyleSubject = "w-[580px] h-10 border-2 border-textContacts rounded-xl pl-2"
const textAreaStyle = "border-2 border-textContacts rounded-xl pl-2 pt-1"

const Contacts = () => {

    return (
        <div className="flex justify-between py-20 bg-bgColor pl-10 rounded-l-xl">
            <div>
                <h1 className="text-5xl text-textContacts font-bold mb-10">Contacts</h1>
                <div className="flex mx-5 my-5">
                    <label htmlFor="First name" className="mr-5">
                        <input type="text" placeholder="first name" className={inputStyle} />
                    </label>
                    <label htmlFor="Last name">
                        <input type="text" placeholder="last name" className={inputStyle} />
                    </label>
                </div>

                <div className="flex mx-5 my-5">
                    <label htmlFor="First name" className="mr-5">
                        <input type="mail" placeholder="email" className={inputStyle}/>
                    </label>
                    <label htmlFor="Last name">
                        <input type="text" placeholder="phone/telegram" className={inputStyle}/>
                    </label>
                </div>

                <div className="flex flex-col mx-5 my-5">
                    <label htmlFor="First name" className="mr-5 flex flex-col"><p className="pl-2">Subject*</p>
                        <input type="text" required className={inputStyleSubject}/>
                    </label>                    
                </div>

                <div className="w-[580px] ml-5">
                    <label htmlFor="message" className="flex flex-col">Message
                        <textarea name="" id="message" cols="60" rows="10" className={textAreaStyle}></textarea>
                    </label>
                    
                </div>
            </div>

            <div>
                <Image src={map} alt="map" width={800} height={940} className="rounded-md" />
            </div>
        </div>
    )

}

export default Contacts