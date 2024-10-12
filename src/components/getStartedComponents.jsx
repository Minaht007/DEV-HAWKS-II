const titleStyle = "text-5xl px-4 pt-16 text-textContacts";
const underTitleStyle = "text-xl font-bold py-5 px-10 text-textContacts";
const labelStyle = "flex flex-col py-4 text-textContacts pb-2";
const inputStyle =
  " py-2 pl-2 w-4/5 mt-1 border-2 rounded-md border-textContacts bg-secondaryBG text-textContacts";
const blockStyle = "text-xl font-bold my-10 text-textContacts";

const Brief = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <div>
        <h1 className={titleStyle}>
          Please answer the questions and we can better understand the task.
        </h1>
      </div>
      <div>
        <p className={underTitleStyle}>
          When filling out the brief, please provide detailed answers. It is
          important for us to hear your personal opinions and needs. Write in
          simple language, as you understand the questions.
        </p>
        <p className={underTitleStyle}>
          The authors of the answers should be decision makers.
        </p>
        <p className={underTitleStyle}>
          We are ready to sign a confidentiality agreement if this is necessary
          for the accurate filling out of the brief.
        </p>
      </div>

      <form className="flex flex-col ">
        <p className={blockStyle}>Block one</p>

        <label htmlFor="" className={labelStyle}>
          Name
          <input
            type="text"
            placeholder="type you name"
            required
            min={3}
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Name of your company
          <input
            type="text"
            placeholder="type you company name"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        {/* _______________________________________________________________ */}

        <label htmlFor="" className={labelStyle}>
          Tell us about the competitive advantages of your brand, product or
          service.
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us about your brand and its advantages
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          List your key competitors, preferably with links to their sites.
          <br />
          Describe what you like and don't like about competitors' sites?
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        {/* _________________________________________________________________________________ */}
        <p className={blockStyle}>Block two</p>

        <label htmlFor="" className={labelStyle}>
          Tasks of the site (what role should it play)
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="10"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Do you have a website now? What do you like and dislike about it?
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="10"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Who is your target audience?
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="4"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          If there are additional site goals, specify them:
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="4"
            className={inputStyle}
          />
        </label>

        {/* <input type="checkbox" className="flex flex-row" />dgddgfd */}

        <label htmlFor="" className={labelStyle}>
          List the main items of the site's navigation menu
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          What main sections should the site contain?
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Specify the key services of the site - application forms, payments,
          etc.
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          What functions should be implemented on the main page?
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          What general features would you like to include in the site? (For
          example, filling the shopping cart, subscribing to the newsletter, and
          so on.)
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Do you need to connect analytics and set up conversion tracking from
          the site.
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          What other requirements do you have for the site?
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>

        <label htmlFor="" className={labelStyle}>
          Do you have a domain for your site or do you need to buy one? Do I
          need a domain name for the site or do I already have one?
          <input
            type="text"
            placeholder="type you company name"
            className={inputStyle}
          />
        </label>
        {/* _________________________________________________________________________ */}
        <p className={blockStyle}>Block three</p>
        <h2 className={underTitleStyle}>Additional information</h2>

        <label htmlFor="" className={labelStyle}>
          What is the approximate frequency of updating information on the site?
          <div className="flex flex-col">
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2 " /> once a week
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> once a month
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> once a week
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> once a year
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> other
            </div>
            <input
              type="text"
              placeholder="type your variant"
              className={inputStyle}
            />
          </div>
        </label>

        <label htmlFor="" className={labelStyle}>
          Does your upcoming website need technical support and support?
          <div className="flex flex-col">
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2 " /> Yes
            </div>
            <div className="flex items-center text-xl">
              <input type="checkbox" className="mr-2" /> No
            </div>
          </div>
        </label>

        <label htmlFor="" className={labelStyle}>
          If you have additional information that will be useful for us, please
          tell us.
          <textarea
            type="text"
            placeholder="Your answer"
            cols="30"
            rows="3"
            className={inputStyle}
          />
        </label>
      </form>
    </div>
  );
};

export default Brief;
