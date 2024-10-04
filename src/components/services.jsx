"use client"
import Image from "next/image"
import Img from "../../public/img/chooseUs/chooseUs.png"

const cardStyle = "flex flex-col bg-textContacts rounded-xl w-[370px] my-20"
const useStyle = "w-10 h-10 fill-secondaryTextColor py-10"
const cardTitle = "text-3xl font-bold text-secondaryTextColor pl-5 pt-4"
const cartText = "text-xl font-bold text-secondaryTextColor pl-5"
const cardBtm = "flex w-[200px] px-10 py-3 bg-btmContacts text-secondaryTextColor rounded-md my-5 ml-5"

const Services = () => {


  return (
    <div className="bg-bgColor py-16 px-10 rounded-l-2xl" id="services">
      <h1 className="text-5xl font-bold text-textContacts">Our Services</h1>

      <div className="flex flex-row justify-between mx-auto mt-20">
        <p className="w-[510px] text-5xl font-bold">
          We Offer Professional Services For Your Business
        </p>
        <p className="w-[710px] text-xl" style={{textAlign: "justify"}}>
          Unlock the full potential of your business with our comprehensive
          suite of professional services. From strategic consulting to
          cutting-edge solutions, we empower your growth and success with
          tailored expertise and unwavering commitment to excellence.
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-row justify-around">

        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-webEarth" className={useStyle} />
          </svg>
          <p className={cardTitle} >Web Development</p>
          <p className={cartText}>Web Development service</p>
          <button className={cardBtm}>Learn More</button>
        </div>


        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-structure" className={useStyle} />
          </svg>
          <p className={cardTitle}>Programming</p>
          <p className={cartText}>Web Programming  Service</p>
          <button className={cardBtm}>Learn More</button>
        </div>
        
        
        <div className={cardStyle}>
          <svg className="mt-10">
            <use href="/img/icons/symbol-defs.svg#icon-update" className={useStyle} />
          </svg>
          <p className={cardTitle}>Consultation</p>
          <p className={cartText}>Consultation Service</p>
          <button className={cardBtm}>Learn More</button>
        </div>
      </div>

      <div className="flex flex-row bg-bgColor my-5 pl-5 rounded-l-2xl ">
        <div >
            <h2  className="text-5xl font-bold text-textContacts mt-5">Why Choose us</h2>
            <p className="text-4xl font-bold py-10">We Have an Outstanding Digital Experience</p>
            <p className="w-[800px] text-xl pb-10">Experience excellence in the digital realm with our exceptional services. From innovative design to seamless navigation, we craft immersive experiences that captivate audiences and drive meaningful engagement</p>
            
            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">1</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">Best Performance</p>
                    <p className="text-xl pb-10" >Unrivaled excellence in performance, setting the standard for exceptional quality and optimal results.</p>
                </div> 
            </div>

            <div className="flex items-start ">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">2</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">Best Performance</p>
                    <p className="text-xl pb-10" >Unrivaled excellence in performance, setting the standard for exceptional quality and optimal results.</p>
                </div> 
            </div>

            <div className="flex items-start mb-5">
                <div className="flex justify-center items-center w-8 h-8 border-none rounded-full bg-numberBG">                  
                    <p className="text-2xl text-secondaryTextColor font-bold">3</p>
                </div>
                <div className="pl-4 w-[800px]">
                    <p className="text-4xl font-bold pb-6">Best Performance</p>
                    <p className="text-xl" >Unrivaled excellence in performance, setting the standard for exceptional quality and optimal results.</p>
                </div> 
            </div>
        </div>

        <div className="bg-bgColor pl-5">
            <Image src={Img} alt="img" width={600} height={800} className="w-[520px] h-[680px]"  />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
