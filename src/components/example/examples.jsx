import CarShipping from "./carShipping";
import Noemon from "./neomon";
import Glowoasis from "./glowoasis"



const forExamplePage = () => {
  return (
    <div className="px-2 sm:my-3 md:my-6 desk:my-10">
      <div className=" sm:my-3 md:my-6 desk:my-10">
        <CarShipping />
      </div>

      <div className=" sm:my-3 md:my-6 desk:my-10">
        <Noemon />
      </div>

      <div className=" sm:my-3 md:my-6 desk:my-10">
        <Glowoasis />
      </div>
    </div>
  );
};

export default forExamplePage;
