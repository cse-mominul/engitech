import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coverPic from "../../../Assets/dataCenters (2).jpg";
import CoverPicTwo from "../../../Assets/2807760_18135-removebg.png";
import COverPicThree from "../../../Assets/smart.png";
const ImageSlider = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };
  return (
    <div className="slider w-full">
      <Slider {...sliderSettings}>
        {/* Silder One */}
        <div className="slide relative ">
          <section class=" dark:bg-[#010230]">
            <div class="grid bg-[#010230] max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white dark:text-white">
                  DCaaS (Data Center as a Service)
                </h1>
                <p class="max-w-2xl pb-7 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white dark:text-gray-400">
                  Engitech’s DCaaS solutions offer a modern, secure, high
                  performing data centre through which we enable a significant
                  reduction in operating expenses and cost-effectiveness as
                  compared to public cloud options.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="h-96" src={coverPic} alt="DataCenter" />
              </div>
            </div>
          </section>
        </div>
        {/* Silder Two */}
        <div className="slide relative ">
          <section class=" dark:bg-[#010230]">
            <div class="grid bg-[#010230] max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl text-white  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                  IT System Integration
                </h1>
                <p class="max-w-2xl text-white  pb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Engitech offers extensive services for the integration of
                  solutions into existing systems or custom solutions for the
                  connection of all relevant interfaces.
                  <br />
                  <br />
                  <br />
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 bg-[#010230] pb-14 pt-2 lg:flex">
                <img className="h-120" src={CoverPicTwo} alt="DataCenter" />
              </div>
            </div>
          </section>
        </div>
        {/* Silder Three */}
        <div className="slide relative ">
          <section class=" dark:bg-gray-900">
            <div class="grid bg-[#010230] max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl text-white  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                  Smart Building
                </h1>
                <p class="max-w-2xl text-white  pb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Engitech’s smart building solution provides you with smaller,
                  scalable, and lower-power connectivity solutions that empower
                  a platform approach to building automation.
                  <br />
                  <br />
                  <br />
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="h-96" src={COverPicThree} alt="DataCenter" />
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
