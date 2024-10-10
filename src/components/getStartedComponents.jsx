const labelStyle = "flex flex-col py-4";
const inputStyle = " py-2 pl-2 border-2 rounded-md border-textContacts";

const Brief = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl px-10">
          Please answer the questions and we can better understand the task.
        </h1>
      </div>
      <div>
        <p className="text-xl font-bold">
          When filling out the brief, please provide detailed answers. It is
          important for us to hear your personal opinions and needs. Write in
          simple language, as you understand the questions.
        </p>
        <p className="text-xl font-bold py-3">The authors of the answers should be decision makers.</p>
        <p className="text-xl font-bold">
          We are ready to sign a confidentiality agreement if this is necessary
          for the accurate filling out of the brief.
        </p>
      </div>
    

      <form className="flex flex-col">

        <p className="text-2xl font-bold">Block one</p>


        <label htmlFor="" className={labelStyle}>
          Name
          <input type="text" placeholder="type you name" required min={3} className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Name of your company
          <input type="text" placeholder="type you company name" className={inputStyle}/>
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        {/* _______________________________________________________________ */}

        <label htmlFor="" className={labelStyle}>
        Tell us about the competitive advantages of your brand, product or service.
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>

        <label htmlFor="" className={labelStyle}>
          Tell us more about the business. (Describe in detail the
          brand/product/service for which the website will be created.)
          <input type="text" placeholder="Your answer" className={inputStyle} />
        </label>



      </form>
    </div>
  );
};

export default Brief;
