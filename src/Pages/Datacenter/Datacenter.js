import React from "react";
import server from "../../Assets/datacenter-cover.jpg";
import image from "../../Assets/Image.svg";

const Datacenter = () => {
  return (
    <div className="bg-white">
      {/* Cover-Pic */}
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
      {/* ---brand----- */}
      <div className="py-6 mx-auto  pb-16 text-center  md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold  text-gray-400 uppercase">
          WORLD'S TOP BRANDS
        </span>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          <a
            href="#"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
          >
            <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h80v40H0z" />
                <path
                  d="M29.862 16.836c0 .576.062 1.043.171 1.386.125.342.28.716.498 1.121.078.125.11.25.11.358 0 .156-.094.312-.296.467l-.981.654a.747.747 0 0 1-.405.14c-.156 0-.312-.077-.468-.217a4.818 4.818 0 0 1-.56-.732c-.156-.265-.312-.561-.483-.92-1.215 1.434-2.74 2.15-4.578 2.15-1.308 0-2.352-.374-3.115-1.121-.763-.748-1.152-1.745-1.152-2.99 0-1.324.467-2.399 1.417-3.208.95-.81 2.211-1.215 3.815-1.215.53 0 1.075.047 1.65.125.577.077 1.169.202 1.792.342V12.04c0-1.183-.25-2.009-.732-2.491-.498-.483-1.34-.717-2.539-.717-.545 0-1.105.063-1.681.203-.577.14-1.137.311-1.682.53-.25.108-.436.17-.545.202a.955.955 0 0 1-.25.046c-.218 0-.327-.155-.327-.482v-.763c0-.25.032-.436.11-.545.077-.11.218-.219.436-.328.545-.28 1.199-.513 1.962-.7a9.441 9.441 0 0 1 2.43-.296c1.852 0 3.207.42 4.08 1.261.856.841 1.292 2.118 1.292 3.831v5.046h.03Zm-6.323 2.367c.514 0 1.044-.094 1.604-.28a3.47 3.47 0 0 0 1.48-.997c.249-.296.436-.623.53-.997a5.59 5.59 0 0 0 .155-1.355v-.654a13.005 13.005 0 0 0-1.433-.264 11.734 11.734 0 0 0-1.464-.094c-1.043 0-1.806.203-2.32.623-.514.42-.763 1.012-.763 1.79 0 .733.187 1.278.576 1.652.374.389.919.576 1.635.576Zm12.505 1.682c-.28 0-.467-.047-.591-.156-.125-.093-.234-.311-.328-.607l-3.66-12.038c-.093-.312-.14-.514-.14-.623 0-.25.125-.39.374-.39h1.527c.295 0 .498.047.607.156.125.094.218.312.311.608l2.617 10.309 2.429-10.31c.078-.31.171-.513.296-.607.124-.093.342-.155.623-.155h1.246c.296 0 .498.046.623.155.124.094.233.312.295.608l2.46 10.433 2.695-10.433c.093-.312.202-.514.312-.608.124-.093.327-.155.607-.155h1.448c.25 0 .39.124.39.389 0 .078-.016.156-.032.249a2.216 2.216 0 0 1-.109.39l-3.753 12.037c-.093.312-.202.514-.327.608-.124.093-.327.155-.592.155h-1.339c-.296 0-.498-.046-.623-.155-.124-.11-.233-.312-.296-.623l-2.413-10.045-2.399 10.029c-.078.312-.17.514-.296.623-.124.109-.342.156-.622.156h-1.34Zm20.011.42c-.81 0-1.62-.093-2.398-.28-.778-.187-1.386-.39-1.79-.623-.25-.14-.421-.296-.483-.436a1.1 1.1 0 0 1-.094-.436v-.794c0-.327.125-.483.358-.483.094 0 .187.015.28.047.094.03.234.093.39.155A8.47 8.47 0 0 0 54.03 19c.623.125 1.23.187 1.853.187.981 0 1.744-.171 2.274-.514.53-.342.81-.84.81-1.48 0-.435-.14-.793-.42-1.09-.281-.295-.81-.56-1.574-.809l-2.258-.7c-1.137-.359-1.978-.888-2.492-1.59-.513-.684-.778-1.447-.778-2.257 0-.654.14-1.23.42-1.729.28-.498.654-.934 1.122-1.277a4.943 4.943 0 0 1 1.62-.81 6.787 6.787 0 0 1 1.961-.264c.343 0 .701.015 1.044.062.358.047.685.109 1.012.171.311.078.607.156.888.25.28.093.498.186.654.28.218.124.373.249.467.39.093.124.14.295.14.513v.732c0 .327-.125.498-.358.498-.125 0-.327-.062-.592-.187-.888-.405-1.884-.607-2.99-.607-.888 0-1.588.14-2.071.436-.483.296-.732.748-.732 1.386 0 .436.156.81.467 1.106.312.296.888.591 1.713.856l2.211.701c1.122.358 1.932.856 2.414 1.495.483.638.717 1.37.717 2.18 0 .67-.14 1.277-.405 1.807-.28.53-.654.996-1.137 1.37-.483.39-1.059.67-1.729.872-.7.218-1.432.327-2.227.327Z"
                  fill="#252F3E"
                  fill-rule="nonzero"
                />
                <g fill="#F90">
                  <path d="M58.999 28.874c-5.124 3.784-12.568 5.793-18.968 5.793-8.97 0-17.052-3.317-23.157-8.83-.483-.436-.047-1.028.53-.685 6.602 3.83 14.747 6.15 23.172 6.15 5.684 0 11.929-1.183 17.675-3.612.857-.39 1.589.56.748 1.184Z" />
                  <path d="M61.132 26.444c-.654-.84-4.33-.405-5.995-.202-.499.062-.577-.374-.125-.701 2.928-2.056 7.74-1.464 8.3-.779.561.701-.155 5.513-2.896 7.818-.42.358-.826.171-.639-.296.623-1.542 2.01-5.014 1.355-5.84Z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="#"
            class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
          >
            <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  x1="58.972%"
                  y1="7.411%"
                  x2="37.191%"
                  y2="103.762%"
                  id="a"
                >
                  <stop stop-color="#114A8B" offset="0%" />
                  <stop stop-color="#0669BC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="59.719%"
                  y1="52.313%"
                  x2="52.691%"
                  y2="54.864%"
                  id="b"
                >
                  <stop stop-opacity=".3" offset="0%" />
                  <stop stop-opacity=".2" offset="7.1%" />
                  <stop stop-opacity=".1" offset="32.1%" />
                  <stop stop-opacity=".05" offset="62.3%" />
                  <stop stop-opacity="0" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="37.279%"
                  y1="4.6%"
                  x2="62.473%"
                  y2="99.979%"
                  id="c"
                >
                  <stop stop-color="#3CCBF4" offset="0%" />
                  <stop stop-color="#2892DF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill-rule="nonzero" fill="none">
                <path d="M0 0h80v40H0z" />
                <path
                  d="M14.152 0h12.562l-13.04 38.637A2.003 2.003 0 0 1 11.775 40H2a2 2 0 0 1-1.895-2.64l12.15-35.997A2.003 2.003 0 0 1 14.151 0Z"
                  fill="url(#a)"
                  transform="translate(19)"
                />
                <path
                  d="M51.406 25.915h-19.92a.922.922 0 0 0-.63 1.597l12.8 11.947c.373.347.864.54 1.373.54h11.28l-4.903-14.084Z"
                  fill="#0078D4"
                />
                <path
                  d="M14.152 0c-.87-.003-1.64.56-1.902 1.39L.12 37.327A1.997 1.997 0 0 0 2.005 40h10.029a2.143 2.143 0 0 0 1.645-1.4l2.419-7.128 8.64 8.059c.362.3.816.465 1.286.469h11.237l-4.928-14.085-14.367.004L26.759 0H14.152Z"
                  fill="url(#b)"
                  transform="translate(19)"
                />
                <path
                  d="M30.196 1.36A2 2 0 0 0 28.301 0h-14a2 2 0 0 1 1.896 1.36l12.15 36A2 2 0 0 1 26.45 40h14a2 2 0 0 0 1.895-2.64l-12.15-36Z"
                  fill="url(#c)"
                  transform="translate(19)"
                />
              </g>
            </svg>
          </a>
          <a
            href="#"
            class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
          >
            <svg
              data-aos="zoom-out"
              width="80"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill-rule="nonzero" fill="none">
                <path d="M0 0h80v40H0z" />
                <path
                  d="m47.042 12.803 3.709-3.709.247-1.561c-6.759-6.146-17.502-5.45-23.595 1.454-1.692 1.917-2.947 4.307-3.617 6.775l1.328-.187 7.418-1.223.573-.586c3.3-3.624 8.878-4.111 12.688-1.028l1.249.065Z"
                  fill="#EA4335"
                />
                <path
                  d="M56.034 15.653a16.708 16.708 0 0 0-5.036-8.12l-5.205 5.205a9.253 9.253 0 0 1 3.396 7.34v.924a4.633 4.633 0 0 1 4.633 4.632c0 2.559-2.074 4.581-4.633 4.581h-9.278l-.911.989v5.557l.91.872h9.28c6.654.051 12.091-5.25 12.143-11.904a12.05 12.05 0 0 0-5.299-10.076"
                  fill="#4285F4"
                />
                <path
                  d="M30.645 37.633h9.266v-7.418h-9.266c-.66 0-1.3-.142-1.9-.416l-1.314.403-3.735 3.709-.325 1.262c2.094 1.582 4.65 2.471 7.274 2.46"
                  fill="#34A853"
                />
                <path
                  d="M30.645 13.57c-6.655.04-12.018 5.468-11.978 12.123a12.05 12.05 0 0 0 4.704 9.48l5.374-5.374a4.633 4.633 0 1 1 6.13-6.13l5.374-5.374a12.038 12.038 0 0 0-9.604-4.724"
                  fill="#FBBC05"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col md:flex-row bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 items-center">
        {/* <!-- First Part with Serial Points --> */}
        <div class="flex-1 md:pr-8">
          <ul class="list-decimal">
            <li class="mb-4 text-3xl text-white p-6 pl-16 ">
              <span data-aos="fade-up" className="opacity-40">
                One
              </span>
              <p data-aos="fade-up">Pick Your Cloud Solution</p>
              <p data-aos="fade-up" class="text-sm text-white">
                Streamline your workflow with the seamless and rapid deployment
                of on-demand cloud services, granting you access to unparalleled
                high-performance computing power while reveling in the boundless
                flexibility and scalability of the cloud. Whether it's launching
                applications, managing databases, or running resource-intensive
                workloads, harness the efficiency and agility of our cloud
                platform to meet your dynamic business needs, all while
                maintaining the utmost control and cost-effectiveness.
              </p>
            </li>
            <li class="mb-4 text-3xl text-white p-6 pl-16 ">
              <span data-aos="fade-up" className="opacity-40">
                Two
              </span>
              <p data-aos="fade-up">Eliminate Downtime</p>
              <p data-aos="fade-up" class="text-sm text-white">
                Introducing the cutting-edge solution for your peace of mind,
                the ultimate sleep assurance platform with automatic failover
                and an unbreakable 99.999% uptime guarantee. In today's
                fast-paced digital world, downtime is not an option. Whether you
                are running a critical business operation, managing a bustling
                e-commerce platform, or simply relying on seamless connectivity
                for your day-to-day activities, uninterrupted service is
                paramount. That's where SleepWellNet™ comes in - a revolutionary
                solution designed to ensure you rest easy at night, knowing that
                your systems are secure and operational, even during the most
                challenging circumstances.
              </p>
            </li>
            <li class="mb-4 text-3xl text-white p-6 pl-16 ">
              <span data-aos="fade-up" className="opacity-40">
                Three
              </span>
              <p data-aos="fade-up">Innovate</p>
              <p data-aos="fade-up" class="text-sm text-white">
                Experience software development like never before with our
                revolutionary platform, the solution that allows you to
                concentrate on creating the best software, while we take care of
                managing the hardware. In the fast-paced world of software
                development, your primary focus should be on crafting
                innovative, cutting-edge solutions that meet the needs of your
                users. That's where FocusSoft™ comes in, liberating you from the
                burdens of hardware management and allowing you to channel all
                your energy into delivering top-notch software products.
              </p>
            </li>
            {/* <!-- Add more points as needed --> */}
          </ul>
        </div>

        {/* <!-- Second Part with Image --> */}
        <div class="flex-1 md:flex-none md:w-64 lg:w-96  pr-6">
          <img
            data-aos="zoom-out"
            src={image}
            alt="Image"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Datacenter;
