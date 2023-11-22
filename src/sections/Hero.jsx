import AppDownloads from "../assets/images/appds.png";
import meds from "../assets/images/meds.svg";
import Doc from "../assets/images/doc.png";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import thermo from "../assets/images/thermo.png";
import steth from "../assets/images/steth.png";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="md:max-w-7xl mx-auto md:pt-40 pt-20 px-6">
      {/* hero sec-1 */}
      <div className="lg:grid grid-cols-3 gap-10 md:-mb-20">
        <div className="col-span-2">
          <h1 className="md:text-6xl text-4xl uppercase leading-relaxed font-bold tracking-widest">
            Health
            <span className="inline-flex items-baseline">
              <img
                src={meds}
                alt="meds"
                className="md:h-11 md:w-11 h-8 w-8 bg-[#FEE4C9] rounded-full mx-1 self-center"
              />{" "}
            </span>
            Info
            <span className="italic block font-semi-bold">in one app</span>
          </h1>
          <img src={AppDownloads} alt="ios" className="w-60 md:mt-10 my-5" />
        </div>
        <div className="col-span-1 inline-block ">
          <p className="text-2xl">
            Doctors, medicine, lab tests - all in one{" "}
            <span>service 24/7 availability...</span>
          </p>
          <button className="mt-5 font-bold">
            See details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline ml-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* hero section-2 */}
      <div className="md:flex gap-10 pt-20 md:pt-0 items-end space-y-4 md:p-0">
        {/* first sec-smileys */}
        <div className="bg-orange-200 p-10 items-center justify-center rounded-3xl flex-1">
          <p className="text-xl text-center">
            There is a little fatigue, but in general I feel good
          </p>
          <div className="flex flex-nowrap py-10 space-x-4 items-center justify-center">
            <span className="p-2 bg-white rounded-full">😊</span>
            <span className="p-2 bg-white rounded-full">😊</span>
            <span className="p-2 bg-white rounded-full">😊</span>
          </div>
        </div>

        {/* second sec doctor */}
        <div className="flex-2 p-4 md:p-0">
          <div className="bg-purple-200 grid grid-cols-3 h-[500px] lg:w-[500px] md:w-[400px] relative pt-10 pl-10 rounded-3xl overflow-visible">
            <div className="col-span-2">
              <p className="text-xl mb-10">
                What symptoms are
                <span className="md:block">troubling you today?</span>
              </p>
              <div className="space-x-4 space-y-3">
                <button className="bg-white py-1 px-4 rounded-full">
                  Chest Pain
                </button>
                <button className="bg-white py-1 px-4 rounded-full">
                  Headache
                </button>
                <button className="bg-white py-1 px-4 rounded-full">
                  Fever
                </button>
                <button className="bg-white py-1 px-4 rounded-full">
                  Back Pain
                </button>
                <button className="bg-black py-1 px-4 rounded-full text-white">
                  Cough
                </button>
              </div>
            </div>
            <div className="col-span-2 absolute right-0 bottom-0 ">
              <img src={Doc} alt="doc" className="h-[320px] object-cover " />
            </div>
            <div className="absolute left-[-30px] bottom-40 ">
              <img src={thermo} alt="thermo " className="w-[100px]" />
            </div>

            <div className="absolute right-[-50px] top-10 -rotate-45">
              <img src={steth} alt="ste" />
            </div>

            <div className="bg-white rounded-3xl absolute bottom-[-40px] right-[-20px] py-10 px-10 shadow-xl border">
              <div className="flex gap-x-1 items-center justify-center mb-4">
                <FaCircle className="fill-purple-100" />
                <FaCircle className="fill-purple-100" />
                <FaCircle className="fill-purple-100" />
                <FaCircle className="fill-purple-200" />
                <FaCircle className="fill-purple-400" />
              </div>
              What level of tiredness do you feel now?
            </div>
          </div>
        </div>
        {/* third sectio ratings */}
        <div className="justify-start flex-1 shadow-2xl md:shadow-none border rounded-3xl md:rounded-none md:border-none ">
          <div className="flex pt-10 pl-5 md:p-0 flex-nowrap">
            <img
              src={user1}
              alt="user1"
              className="h-12 w-12 rounded-full object-cover mr-[-9px] cursor-pointer border-2"
            />
            <img
              src={user2}
              alt="user2"
              className="h-12 w-12 rounded-full object-cover mr-[-9px] cursor-pointer border-2"
            />
            <img
              src={user3}
              alt="user2"
              className="h-12 w-12 rounded-full object-cover cursor-pointer border-2"
            />
          </div>

          <p className="py-5 md:pl-0 pl-5 ">
            <span className="font-extrabold text-xl">+100k</span> happy clients
          </p>
          <div className="bg-black p-10 content-center rounded-3xl ">
            <p className="text-xl text-gray-100">App store rating</p>
            <p className="text-3xl font-bold py-4 text-gray-100">4.9</p>
            <div className="flex flex-nowrap space-x-1">
              <span className="w-3">⭐</span>
              <span className="w-3"> ⭐</span>
              <span className="w-3">⭐</span>
              <span className="w-3">⭐</span>
              <span className="w-3">⭐</span>
            </div>
            <p className="text-xs text-gray-100">523k reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
