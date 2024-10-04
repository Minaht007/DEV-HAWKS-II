import Image from "next/image"
import Logo from "../../public/img/logo/dev_hawks_done-04.png"


const  OurTeam = () => {

    return (
        <div className="px-10 my-auto relative">            
            <div className="flex flex-col justify-center w-full">
            <h1 className="text-textContacts text-5xl font-bold py-10" >Our Team</h1>
                <div className="flex flex-row">
                <div className="w-[800px] h-[200px]">
                    <p className="text-3xl font-bold text-textContacts">Our Skilled Team of Experts</p>
                    <p className="text-xl text-textContacts py-5" style={{textAlign: "justify"}}>Meet our proficient team of seasoned professionals, dedicated to delivering exceptional results through their expertise, innovation, and commitment to excellence in every project they undertake.</p>
                </div>
                <div className="absolute top-[40%] right-[5%]">
                    <Image src={Logo} alt="logo" width={400} height={60} />
                </div>
                </div>
            </div>
        </div>
    )

}

export default OurTeam