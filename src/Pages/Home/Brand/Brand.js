import React from "react";
import cost from "../../../Assets/reduce-cost.png";
const Brand = () => {
  return (
    <div className="text-center bg-white">
      <h3 className="sm:text-lg text-gray-900 md:text-3xl lg:text-3xl">
        A Service that Loves You Back
      </h3>
      <div className="lg:flex-row-reverse  flex-col">
        <div className="w-[20%]">
          <img className="w-24 ml-12 my-4" src={cost}></img>
          <p>
            Lower costs with Zero Ops and artificial intelligence that manages
            memory and CPU.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
