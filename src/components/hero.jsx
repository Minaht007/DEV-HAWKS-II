import Image from "next/image";
import heroImage from "../../public/img/hero/heroImg.png";
import underLine from "../../public/img/hero/underLine.png";

const Hero = () => {
  return (
    <div className="relative w-screen h-full bg-bgColor layout">
      <div className="flex flex-row justify-between items-center py-20 ">
        <div className="ml-16">
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
