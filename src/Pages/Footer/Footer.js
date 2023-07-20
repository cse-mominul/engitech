import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#010230] text-white">
        <div>
          <img
            className="w-36"
            src="https://i.ibb.co/VTpFK4z/cropped-hg-5.png"
          ></img>
          <p>
            Engitech Solutions Limited 145 MAR Garden, Block A, Road-3,
            <br /> Flat-603,Niketon, Gulshan 1, Dhaka-1212
            <br />
            <p className="text-gray-600 pt-4">
              © 2023 Engitech Solutions Limited All rights reserved.
            </p>
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">
            Critical Infrastructure Lifecycle Solution (CILS)
          </a>
          <a className="link link-hover">Smart board room</a>
          <a className="link link-hover">IT System Integration</a>
          <a className="link link-hover">Data Centre as a Service</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
