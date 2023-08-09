import React from "react";
import aboutus from "../../Assets/about-us.jpg";
import { BsFlagFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";

const Aboutus = () => {
  return (
    <div className="bg-white w-full">
      {" "}
      <div className="hero min-h-screen ">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            src={aboutus}
            className="w-[100%] lg:w-[50%]  pr-6"
          />
          <div>
            <h1
              data-aos="fade-down"
              className="mb-5 text-left text-xl font-bold"
            >
              ABOUT US
            </h1>
            <h3
              data-aos="fade-down"
              className="mb-5 text-blue-900 text-left text-xl font-bold"
            >
              Our Journey, Your Success
            </h3>
            <p data-aos="fade-down" className="mb-5 text-gray-600 text-left">
              Engitech is a leading Engineering, Procurement and Designing
              Company providing turnkey solutions, from concept to commissioning
              basis. Our expert team provides top-class services in Design,
              Supply, Installation, Testing & Commissioning as well as
              Maintenance (AMC) of Data Centre, Security Systems & Integrated
              Building Management Solutions such as Fire Alarm System, Fire
              Protection Systems with Clean Agents, Fire Doors, CCTV System,
              Public Address System, Gas Detection Systems, Access Control
              Systems, Facial Recognition System, Building Management Systems,
              etc. We are a global provider of products, services, and solutions
              and safeguard your data with maximum security and operational
              reliability levels with industry-leading expertise.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <body className="p-4 flex divide-x-2 flex-col gap-4 lg:flex-row justify-left lg:justify-center items-center">
          <div
            data-aos="fade-down"
            className=" p-4 w-64 lg:w-96 flex flex-col  lg:items-left"
          >
            {" "}
            <BsFlagFill
              data-aos="fade-down"
              className="text-5xl text-[#234F93]  mb-4"
            ></BsFlagFill>
            <p
              data-aos="fade-down"
              className="text-left font-bold text-gray-700"
            >
              {" "}
              Founded
            </p>
            <p>
              <p
                data-aos="fade-down"
                className="text-left text-gray-600 text-sm font bold "
              >
                Started its operation in 2018 as a distinguished integrator of
                Data Centre & premium safety, security & Building Automation
                solutions of Bangladesh.
              </p>
            </p>
          </div>
          <div className=" p-4 w-64 lg:w-96 flex flex-col items-left">
            {" "}
            <FaUserFriends
              data-aos="fade-down"
              className="text-5xl text-[#234F93] mb-4"
            ></FaUserFriends>
            <p
              data-aos="fade-down"
              className="text-left font-bold text-gray-700"
            >
              {" "}
              10k User
            </p>
            <p>
              <p
                data-aos="fade-down"
                className="text-left text-sm text-gray-600 "
              >
                The satisfaction of 10k plus happy customers suggests that our
                services are of high quality and provide value to you.
                <br />
                <br />
              </p>
            </p>
          </div>
          <div className=" p-4 w-64 lg:w-96 flex flex-col items-left">
            {" "}
            <FaAward
              data-aos="fade-down"
              className="text-5xl pt-0 lg:pt-2 text-[#234F93]  mb-4"
            ></FaAward>
            <p
              data-aos="fade-down"
              className="text-left font-bold text-gray-700"
            >
              {" "}
              Awards
            </p>
            <p>
              <p
                data-aos="fade-down"
                className="text-left text-sm text-gray-600 "
              >
                These awards highlight our commitment to delivering top-quality
                services and our dedication to customer satisfaction.
                <br />
                <br />
              </p>
            </p>
          </div>
        </body>
      </div>
      <div className="flex-col pb-12 hero-content lg:flex-row-reverse">
        <div className="w-[100%] lg:w-[50%]">
          <h3
            data-aos="fade-down"
            className="mb-5 text-gray-900 text-left text-xl font-bold"
          >
            Who We Are
          </h3>
          <p data-aos="fade-down" className="mb-5 text-gray-600 text-left">
            Engitech Solutions Limited started its operation in 2018 as a
            distinguished integrator of Data Centre & premium safety, security &
            Building Automation solutions in Bangladesh. We have established
            ourselves to provide designs, integrate and implement cutting edge
            technologies into advances, feature-rich solutions to customers in
            industrial, life safety and security markets. We are committed to
            maintaining consistency in quality control and adherence to
            milestones thus assuring deliverance of a range of products under
            one roof exceeding client expectations. Engitech is managed by a
            highly qualified management team and houses excellent engineering
            skills, uncompromising quality control, a sizable project team and a
            dedicated erection & commissioning team under one roof. For many
            digital leaders out there, we are someone who you can fully trust.
            Our dedicated and operator centric advanced services will help you
            take your business to the next level. We aim to provide global
            space, a rich ecosystem, and service excellence. Our strong
            technology foundation and customer-centric approach allow us to
            cater to unique colocation necessities in the most commercial
            business terms to meet present and future requirements. Our peerless
            ethical standard and strictest global standards with the best
            knowledge about home markets ensure the development and consistency
            of the operations. We have built our colocation facilities with the
            most rigorous industry standards with scalable end-to-end data
            centre solutions, connectivity, support services, and cloud
            infrastructure solutions.
            <br />
          </p>
        </div>

        <div className="w-[100%] lg:w-[50%]">
          <div className="lg:flex ">
            {" "}
            <div>
              <BiCheckCircle
                data-aos="fade-down"
                className="text-5xl m-4 text-[#234F93]"
              ></BiCheckCircle>
            </div>
            <div>
              <div className="bg-white shadow rounded-lg">
                <h1
                  data-aos="fade-down"
                  className="text-gray-900 font-bold p-2"
                >
                  Our Mission
                </h1>
                <p data-aos="fade-down" className="text-gray-600 p-4">
                  Engitech aims to provide 24/7 data centre solutions with
                  flexible commercial terms. Our seamless and secured internet
                  connectivity to various grades of customers is top-notch.
                  Choosing Engitech gives you access to a high-performance
                  ecosystem to enjoy the scalability and flexibility of our
                  global data centre. Our strategic priority is to expand our
                  global platform enabling our customers greater success
                  worldwide. We commit ourselves to ensure a diverse,
                  comprehensive workforce and promote long term economic growth
                  for everyone who works with and for us.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex mt-4">
            {" "}
            <div>
              <BiDonateHeart
                data-aos="fade-down"
                className="text-5xl m-4 text-[#234F93] "
              ></BiDonateHeart>
            </div>
            <div>
              <div className="bg-white shadow rounded-lg">
                <h1
                  data-aos="fade-down"
                  className="text-gray-900 font-bold p-4"
                >
                  Our Promise
                </h1>
                <p data-aos="fade-down" className="text-gray-600 p-2">
                  Our CEO and leadership team are committed to delivering the
                  best service for our customers. Together, we help Engitech
                  acquire a variety of thoughts, offering equivalent
                  opportunities to all our gifted workers and making the work
                  environment better. Our strong ethical values and moral duty
                  towards our company and customers thrive us to keep doing the
                  best with our abilities. We prioritize our duty and
                  responsibilities in our business and work efficiently to
                  confront the world’s most significant environmental
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
