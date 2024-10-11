import analitycsImg from "../../public/img/wps/analytics.jpg"
import designImg from "../../public/img/wps/design2.jpg"
// import arrowImg from "../../public/img/wps/arrowDown.png"
import dev2Img from "../../public/img/wps/dev2.jpg"
import testingImg from "../../public/img/wps/testing-1.jpg"
import supportImg from "../../public/img/wps/support.jpg"
import Image from "next/image"





const title = "text-5xl font-bold py-10 px-10 text-textContacts";
const underTitle = "text-3xl font-bold py-3 px-10 text-textContacts";
const text = "text-2xl py-3 px-10 text-textContacts";
const stepText = "text-2xl py-3 px-10 text-textContacts";
const numberStyle =
  "text-3xl font-bold text-center text-secondaryTextColor bg-numberBG rounded-full border-none w-12 h-12 flex items-center justify-center";

const WpsComponents = () => {
  return (
    <div className="relative bg-bgColor">
      <div>
        <h1 className={title}>WEB PROGRAMMING SERVICE</h1>
        <h2 className={underTitle}>
          In this article we will show the stages of web application development
        </h2>
      </div>

      <div>
        <p className={text}>
          To develop a turnkey web application, you need a team of professionals
          with whom you will be comfortable communicating and making suggestions
          during the development process and after it.
        </p>
        <p className={text}>
          Once you have selected a team, we begin development.
        </p>
      </div>

      <div className="py-16">
        <div className="flex w-full relative">
          <div className="flex-col items-start w-2/3">
            <Image src={analitycsImg} alt="analitic" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>Evaluation and analytics</p>
            <p
              className={`${stepText} text-start`}
              style={{ textAlign: "justify" }}
            >
              Our team carefully studies the idea and options for achieving your
              goals. After that, the manager provides you with a detailed
              assessment of the project, taking into account all the functions
              and deadlines for its implementation, and the analyst helps to
              accurately estimate the deadlines and cost of the work, create a
              detailed plan for each stage of development. Thus, you will always
              be aware of what exactly we are working on now and what to expect
              from each stage of work.
            </p>
          </div>

          <div className="flex flex-col  justify-center absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>1</p>           
          </div>
        </div>

        <div className="flex justify-end py-20  w-full relative">
          <div className="flex-col w-2/3">
          <Image src={designImg} alt="designImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>Design</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              We select a color scheme and develop a corporate style for the web
              application. At this stage, we form the appearance of the product
              elements taking into account all the requirements and features of
              your users&apos; perception.
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>2</p>
          </div>
        </div>

        <div className="flex justify-start w-full relative">
          <div className="flex-col w-2/3">
          <Image src={dev2Img} alt="dev2Img" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>Creating a prototype</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              After evaluation and analysis, the team starts creating a
              prototype - a rough version of the future web application. With
              its help, we will demonstrate to you the basic version of the
              project and how the user will be able to interact with it.
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>3</p>
          </div>
        </div>

        <div className="flex justify-end w-full relative">
          <div className="flex-col w-2/3">
          <Image src={testingImg} alt="testingImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>Development and testing</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              The main part of the development team&apos;s work, where we write code
              and implement the necessary functions, is creating all the pages
              of your application in compliance with the logic and main goal of
              the project. At each stage, the application is tested - it is
              important to make sure that all elements work stably and perform
              their main functions.
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>4</p>
          </div>
        </div>

        <div className="flex justify-start w-full relative">
          <div className="flex-col w-2/3">
          <Image src={supportImg} alt="supportImg" width={200} height={200} className="rounded-md mx-auto" />
            <p className={underTitle}>Support</p>
            <p
              className={`${stepText} text-end`}
              style={{ textAlign: "justify" }}
            >
              Once the application has successfully passed the test and entered
              the market, we support it, refine existing functions or add new
              ones based on your business objectives and analysis of the
              effectiveness of user interaction with the site.
            </p>
          </div>

          <div className="flex flex-row absolute top-[20%] left-[50%] justify-center ">
            <p className={numberStyle}>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpsComponents;
