import Image from "next/image";
import heroImage from "../../public/img/hero/heroImg.png";
import underLine from "../../public/img/hero/underLine.png";
import checkOne from "../../public/img/icons/checkOne.png"

const Hero = () => {
  return (
    <div className="relative w-screen h-full bg-bgColor layout">
      <div className="flex flex-row justify-between items-center py-20 ">
        <div className="ml-16">
          <div className="flex flex-row items-center mb-20">
            <Image src={checkOne} alt="check" width={12} height={12} className="w-6 h-6" />
            <p className="text-textContacts font-bold text-xl pl-3">Make your business online </p>
          </div>
          <h1 className="text-5xl text-textContacts font-ball">
            Grow you Business <br /> with DEV HAWKS
          </h1>
          <Image
            src={underLine}
            alt="underLine"
            width={400}
            height={10}
            className="pb-20"
          />
          <button className="border-2 border-borderColor rounded-[12px] text-secondaryTextColor text-2xl bg-btmContacts px-10 py-3">
            Get Started
          </button>
        </div>
        <Image
          src={heroImage}
          alt="heroImg"
          sizes="100vw"
          style={{
            width: "30%",
            height: "auto",
          }}
          width={500}
          height={300}
          className="mr-20"
        />
      </div>
    </div>
  );
};

export default Hero;
