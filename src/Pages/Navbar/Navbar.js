import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#010230]">
      {" "}
      <div className="navbar  absolute top-0 left-0 w-full bg-white z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <button className="text-gray-700 text-lg hover:text-[#224E91]">
                    Home
                  </button>
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-gray-700 text-lg hover:text-[#224E91]">
                    Services
                  </summary>
                  <ul className="p-2 text-gray-400">
                    <li>
                      <a>Critical Infrastructure Lifecycle Solution (CILS)</a>
                    </li>
                    <li>
                      <a>Data Centre as a Service</a>
                    </li>
                    <li>
                      <a>IT System Integration</a>
                    </li>
                    <li>
                      <a>Smart building</a>
                    </li>
                    <li>
                      <a>Smart board room</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-gray-700 ml-2 text-lg hover:text-[#224E91]">
                    Solution
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Access control system</a>
                    </li>
                    <li>
                      <a>Building management system</a>
                    </li>
                    <li>
                      <a>Cctv solution</a>
                    </li>
                    <li>
                      <a>Display-solution</a>
                    </li>
                    <li>
                      <a>I lighting</a>
                    </li>
                    <li>
                      <a>IOT parking</a>
                    </li>
                    <li>
                      <a>Ip phone solution</a>
                    </li>
                    <li>
                      <a>Lan cabling solution</a>
                    </li>
                    <li>
                      <a>Pa-va system</a>
                    </li>
                    <li>
                      <a>Solution for fire</a>
                    </li>
                    <li>
                      <a>Sound-system</a>
                    </li>
                    <li>
                      <a>Video-conferencing-solution</a>
                    </li>
                    <li>
                      <a>Wi-fi-solution</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-gray-700 ml-2 text-lg hover:text-[#224E91]">
                    Client's
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Dhakacolo-data-center dhaka</a>
                    </li>
                    <li>
                      <a>Felicity IDC Limited data-center</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <button className="text-gray-700 text-lg hover:text-[#224E91]">
                  About Us
                </button>
              </li>
              <li>
                <button className=" text-gray-700 text-lg hover:text-[#224E91]">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost ">
            <img
              className="w-36"
              src="https://i.ibb.co/VTpFK4z/cropped-hg-5.png"
            ></img>
          </Link>
        </div>
        <div className="hidden lg:flex justify-center">
          <ul className="menu menu-horizontal p-0 py-4 ">
            <li>
              <Link to="/">
                <button className="text-gray-700 text-lg hover:text-[#224E91]">
                  Home
                </button>
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-gray-700 relative text-lg hover:text-[#224E91]">
                  Services
                </summary>
                <ul className="p-2 backdrop-blur-lg bg-white/30">
                  <li className="hover:text-[#224E91] text-black">
                    <a>Critical Infrastructure Lifecycle Solution (CILS)</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Data Centre as a Service</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>IT System Integration</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Smart building</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Smart board room</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0} className="relative">
              <details>
                <summary className="text-gray-700 ml-2 text-lg hover:text-[#224E91]">
                  Solution
                </summary>
                <ul className="p-2 backdrop-blur-lg bg-white/30">
                  <li className="hover:text-[#224E91] text-black">
                    <a>Access control system</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Building management system</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Cctv solution</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Display-solution</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>I lighting</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>IOT parking</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Ip phone solution</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Lan cabling solution</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Pa-va system</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Solution for fire</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Sound-system</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Video-conferencing-solution</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Wi-fi-solution</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-gray-700 ml-2 text-lg hover:text-[#224E91]">
                  Client's
                </summary>
                <ul className="p-2 backdrop-blur-lg bg-white/30">
                  <li className="hover:text-[#224E91] text-black">
                    <a>Dhakacolo-data-center dhaka</a>
                  </li>
                  <li className="hover:text-[#224E91] text-black">
                    <a>Felicity IDC Limited data-center</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button className="text-gray-700 text-lg hover:text-[#224E91]">
                About Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
