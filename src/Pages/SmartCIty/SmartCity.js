import React from "react";
import smartCIty from "../../Assets/smartcity.jpg";
const SmartCity = () => {
  return (
    <div>
      {" "}
      <div className="bg-white py-12">
        <div className="hero min-h-screen bg-[#2E1151]">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img
              data-aos="zoom-out-left"
              src={smartCIty}
              className="w-[100%] animate-pulse  lg:w-[50%]  pr-6"
            />
            <div>
              <h1 className="mb-5 text-left text-3xl text-white font-bold">
                Transforming Spaces into Intelligent Ecosystems
              </h1>
              <p>
                Smart Building Service is an innovative and cutting-edge
                solution that transforms traditional buildings into intelligent,
                efficient, and connected spaces. Leveraging advanced
                technologies like the Internet of Things (IoT), artificial
                intelligence (AI), and automation, this service optimizes energy
                consumption, enhances occupant comfort, and streamlines facility
                management. Through a network of interconnected devices and
                sensors, Smart Building Service enables real-time data
                collection, analysis, and control of various building systems,
                including lighting, heating, ventilation, air conditioning
                (HVAC), security, and more. This data-driven approach empowers
                building operators to make informed decisions, leading to energy
                savings, reduced operational costs, and improved sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCity;
