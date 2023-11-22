import leaf from "../assets/images/leaf.png";
import log from "../assets/images/log.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import appds from '../assets/images/appds.png'

const Footer = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto mx-5 py-10 px-10 mt-20">
      <div className=" grid md:grid-cols-5 grid-cols-2 gap-10">
        <div className="col-span-2 mb-10">
          <div className="flex items-center gap-5">
            <a href="#">
              <img
                src={log}
                alt="meds"
                className="md:h-11 md:w-11 h-10 w-10 bg-[#FEE4C9] rounded-full border border-orange-200 shadow"
              />
            </a>
            <p className="font-bold md:text-xl text-2xl">HEAL APP</p>
          </div>
          <p className="md:text-sm text-gray-600 py-5">
            Doctors, medicines, tests - all in one service
          </p>
          <span className="flex space-x-4">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </span>
        </div>
        <div className="grid col-span-1 space-y-2">
          <p className="font-semibold">Menu</p>
          <a href="#" className="md:text-sm text-gray-600 ">
            Services
          </a>
          <a href="#" className="text-sm text-gray-600 ">
            How it works
          </a>
          <a href="#" className="text-sm text-gray-600 ">
            Testimonial
          </a>
        </div>
        <div className="grid col-span-1 space-y-2">
          <p className="font-semibold">More info</p>
          <a href="#" className="text-sm text-gray-600 ">
            Pricing
          </a>
          <a href="#" className="text-sm text-gray-600 ">
            FAQ
          </a>
          <a href="#" className="text-sm text-gray-600 ">
            Blog
          </a>
        </div>

        <div className="grid col-span-1 space-y-2 ">
          <p className="font-semibold ">Contact</p>
          <a href="#" className="text-sm text-gray-600 ">
            heal@app.com
          </a>
          <a href="#" className="text-sm text-gray-600 ">
            1-888-545-4554
          </a>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-1 items-center">
        <p className="md:text-sm text-gray-600 text-xs">Heal app 2023 All rights reserved</p>
        <div className="w-[40%] justify-end flex w-50">
        <img src={appds} alt="jdjd"  />
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
