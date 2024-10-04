

const cardStyles = "flex flex-col w-60 h-60 border-none rounded-lg bg-textContacts justify-center items-center"
const svgStyle = "w-8 h-8 fill-secondaryTextColor"
const cardText = "text-2xl text-secondaryTextColor py-4"


const AboutUs = () => {
  return (
    <div className="mt-20 w-full px-10" id={"#aboutUs"}>
      <h1 className="text-5xl font-bold text-textContacts">About Us</h1>

      <div className="flex flex-row justify-between mx-auto mt-20">
        <p className="w-[510px] text-5xl font-bold">
          Driven Digital Resolution Through Experienced Team
        </p>
        <p className="w-[710px] text-xl" style={{textAlign: "justify"}}>
          Empower your digital journey with our seasoned team, dedicated to
          delivering innovative solutions. From concept to execution, we're
          committed to driving impactful resolutions for your business's
          success.
        </p>
      </div>

      <div className="flex flex-row justify-around items-center my-20">
        <div className={cardStyles}>
          <svg >
            <use
              href="/img/icons/symbol-defs.svg#icon-clock"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>On Time delivery</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-people"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>Professionalism</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-satisfection"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>100% Satisfaction</p>
        </div>
        <div className={cardStyles}>
          <svg>
            <use
              href="/img/icons/symbol-defs.svg#icon-bestPerfomens"
              className={svgStyle}
            />
          </svg>
          <p className={cardText}>Best Performance</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
