import React from "react";
import server from "../../Assets/datacenter-cover.jpg";

const Datacenter = () => {
  return (
    <div>
      <div
        className="hero h-[500px] md:h-[32rem] overflow-hidden "
        style={{
          backgroundImage: `url(${server})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay  bg-opacity-20"></div>
        <div className="hero-content backdrop-blur-[2px] text-center text-white">
          <div className="max-w-full">
            <h1 className="mb-5 text-3xl font-bold">
              Rediscover your passion for the Cloud once more.
            </h1>
            <p className="mb-5">
              Colocation, bare metal, and multicloud that just works
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datacenter;
