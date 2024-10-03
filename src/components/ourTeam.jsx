import Image from "next/image"
import Logo from "../../public/img/logo/dev_hawks_done-04.png"


const  OurTeam = () => {

    return (
        <div className="mt-20">
            <h1 className="text-textContacts text-5xl font-bold py-10" >Our Team</h1>
            <div className="flex flex-row  items-center">
                <div className="w-[800px] h-[200px]">
                    <p className="text-3xl font-bold text-textContacts">Our Skilled Team of Experts</p>
                    <p className="text-xl text-textContacts py-5">Meet our proficient team of seasoned professionals, dedicated to delivering exceptional results through their expertise, innovation, and commitment to excellence in every project they undertake.</p>
                </div>
                <div className="mx-auto ">
                    <Image src={Logo} alt="logo" width={400} height={60} />
                </div>
            </div>
        </div>
    )

}

export default OurTeam