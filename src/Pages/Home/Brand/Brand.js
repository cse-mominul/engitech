import React from "react";
import data from "../../../Assets/datacenter_Icon.svg";
import rapid from "../../../Assets/rapid.svg";
import { BsCashCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FcEngineering } from "react-icons/fc";
const Brand = () => {
  return (
    <div className="text-center bg-white">
      <h3 className="sm:text-lg text-gray-900 md:text-3xl lg:text-3xl">
        A Service that Loves You Back
      </h3>
      <body className="p-4 flex flex-col gap-4 lg:flex-row justify-center items-center">
        <div
          data-aos="zoom-in"
          className="bg-white shadow rounded-lg p-4 w-48 flex flex-col items-center"
        >
          <img src={data} alt="Image 1" className="w-30 h-30  mb-4" />
          <p className="text-center font bold text-gray-900">
            Dedicated Servers
          </p>
          <p>
            <p className="text-center text-sm font bold ">
              These servers are dedicated just to your business, which is fully
              customizable and offers better performane.
            </p>
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-white shadow rounded-lg p-4 w-48 flex flex-col items-center"
        >
          <img src={rapid} alt="Image 1" className="w-30 h-30  mb-4" />
          <p className="text-center font bold text-gray-900">Rapid Services</p>
          <p>
            <p className="text-center text-sm font bold ">
              Your swift and reliable solution provider for all your business
              needs. Speed, quality, and satisfaction guaranteed.
            </p>
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-white shadow rounded-lg p-4 w-48 flex flex-col items-center"
        >
          <BsCashCoin className="text-6xl text-[#B45EE9] mb-4"></BsCashCoin>
          <p className="text-center font bold text-gray-900">
            {" "}
            Affordable price
          </p>
          <p>
            <p className="text-center text-sm font bold ">
              Offering high-quality solutions at affordable prices. Achieve your
              goals without breaking the bank.
            </p>
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-white shadow rounded-lg p-4 w-48 flex flex-col items-center"
        >
          <BiSupport className="text-6xl text-[#18C3BB] mb-4"></BiSupport>
          <p className="text-center font bold text-gray-900">
            {" "}
            Dedicated support
          </p>
          <p>
            <p className="text-center text-sm font bold ">
              Available 24/7 to provide unwavering support whenever you need it.
              Your success is our priority, day and night.
            </p>
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white shadow rounded-lg p-4 w-48 flex flex-col items-center"
        >
          <FcEngineering className="text-6xl text-[#18C3BB] mb-4"></FcEngineering>
          <p className="text-center font bold text-gray-900">
            {" "}
            IT Consultation
          </p>
          <p>
            <p className="text-center text-sm font bold ">
              Empowering innovation, optimizing IT, and achieving success with
              expert guidance. <br />
              <br />
            </p>
          </p>
        </div>
      </body>
    </div>
  );
};

export default Brand;
