import React from "react";
import datacenter from "../../../Assets/Server-amico.svg";
import system from "../../../Assets/systemin.svg";
import smartBuilding from "../../../Assets/Smart home-amico.svg";
import iot from "../../../Assets/Virtual reality-amico.svg";
const DataCenters = () => {
  return (
    <div className="pt-12 pb-6  text-center bg-white">
      <h3 className="sm:text-lg text-gray-900 md:text-3xl lg:text-3xl">
        The solutions we offer
      </h3>
      <p className="pt-4 text-gray-400 lg:text-xl sm:text-sm ">
        Empowering success through a comprehensive range of specialized
        solutions.
      </p>
      {/* Data-Center  */}
      <div>
        <div className="hero min-h-screen bg-white">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img src={datacenter} className="w-[100%] lg:w-[50%]  pr-6" />
            <div>
              <h1 className="mb-5 text-left text-3xl font-bold">
                DCaaS (Data Center as a Service)
              </h1>
              <h3 className="mb-5 text-gray-900 text-left text-xl font-bold">
                Unlocking Data Potential, Beyond Infrastructure.
              </h3>
              <p className="mb-5 text-left">
                Our data center services are designed to provide businesses with
                a state-of-the-art infrastructure that ensures the highest level
                of reliability, security, and performance for their critical IT
                operations. With our extensive expertise and cutting-edge
                technologies, we offer a comprehensive range of solutions
                tailored to meet the unique needs of businesses across various
                industries. <br />
                <div className="pt-4">
                  <button className="btn text-white bg-[#010230]">
                    Learn More
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* System Integration */}
      <div>
        <div className="text-center bg-white">
          <div>
            <div className="hero min-h-screen bg-white">
              <div className="flex-col hero-content lg:flex-row-reverse">
                <div>
                  <h1 className="mb-5 text-left text-3xl font-bold">
                    System Integration
                  </h1>
                  <h3 className="mb-5 text-gray-900 text-left text-xl font-bold">
                    Seamless Solutions, Connected Efficiency.
                  </h3>
                  <p className="mb-5 text-left">
                    Our System Integration services are designed to bridge the
                    gaps between disparate systems, applications, and databases,
                    enabling businesses to optimize their operations, enhance
                    efficiency, and achieve greater productivity. We understand
                    that each organization has its unique set of IT assets,
                    legacy systems, and software applications, which is why our
                    expert team of integration specialists carefully analyze
                    your existing infrastructure and business requirements to
                    design tailored solutions that best meet your needs.
                    <br />
                    <div className="pt-4">
                      <button className="btn text-white bg-[#010230]">
                        Learn More
                      </button>
                    </div>
                  </p>
                </div>
                <img src={system} className="w-[100%] lg:w-[45%]  pr-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Smart Building */}
      <div>
        <div className="hero min-h-screen bg-white">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img src={smartBuilding} className="w-[100%] lg:w-[40%]  pr-6" />
            <div>
              <h1 className="mb-5 text-left text-3xl font-bold">
                Smart Building
              </h1>
              <h3 className="mb-5 text-gray-900 text-left text-xl font-bold">
                Building Intelligence, Connecting Futures.
              </h3>
              <p className="mb-5 text-left">
                Our data center services are designed to provide businesses with
                a state-of-the-art infrastructure that ensures the highest level
                of reliability, security, and performance for their critical IT
                operations. With our extensive expertise and cutting-edge
                technologies, we offer a comprehensive range of solutions
                tailored to meet the unique needs of businesses across various
                industries. <br />
                <div className="pt-4">
                  <button className="btn text-white bg-[#010230]">
                    Learn More
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product Solution */}
      <div>
        <div className="text-center bg-white">
          <div>
            <div className="hero min-h-screen bg-white">
              <div className="flex-col hero-content lg:flex-row-reverse">
                <div>
                  <h1 className="mb-5 text-left text-3xl font-bold">
                    Product Solution
                  </h1>
                  <h3 className="mb-5 text-gray-900 text-left text-xl font-bold">
                    Unlocking Your Potential with Innovative Product Solutions
                  </h3>
                  <p className="mb-5 text-left">
                    Welcome to a world of limitless possibilities with our
                    exceptional product solutions. Embracing the latest
                    technologies and insights, we craft transformative
                    experiences tailored to your unique needs. Our dedicated
                    team of experts is committed to delivering top-notch
                    quality, ensuring seamless integration and unparalleled
                    performance. Unleash the full potential of your endeavors
                    and embark on a journey of success with our reliable,
                    intuitive, and future-forward products at your side.
                    <br />
                    <div className="pt-4">
                      <button className="btn text-white bg-[#010230]">
                        Learn More
                      </button>
                    </div>
                  </p>
                </div>
                <img src={iot} className="w-[100%] lg:w-[45%]  pr-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <button className="btn text-white bg-[#46108C]">
          Our More Services
        </button>
        <hr className="h-px m-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
      </div>
    </div>
  );
};

export default DataCenters;
