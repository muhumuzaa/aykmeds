import { IoMdClose } from "react-icons/io";
import anatomy from "../assets/images/anat.jpg";
import { FaCircle } from "react-icons/fa";
const HowItWorks = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto md:mx-10 mt-20">
      <h2 className="md:text-5xl text-4xl font-bold py-20 text-center">How it works</h2>
      <div className="md:grid grid-cols-3  gap-10">
        {/* first sec ........ */}
        <div className="bg-gray-100 rounded-3xl p-10 col-span-1 pb-0">
          <p className="md:text-4xl text-3xl font-semibold leading-8 py-6">
            Select your symptoms
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            nesciunt consequatur dolorem assumenda, fugiat minus architecto
            neque sit commodi quas, a officia.
          </p>
          <div className="bg-white rounded-3xl mt-10">
            <p className=" text-lg font-semibold p-10 ">
              What symptoms are troubling you today?
            </p>
          </div>

          <div className="w-full my-2 py-2 px-5 rounded-xl bg-white flex justify-between items-center">
            <p className="text-gray-400">
              Cou<span className="text-blue-600">|</span>
            </p>
            <IoMdClose className="cursor-pointer" />
          </div>

          <div className="w-full py-5 px-5 bg-white rounded-3xl">
            <p className="text-blue-600 py-5">
              Cou<span className="text-gray-800">gh</span>
            </p>
            <p className="text-blue-600">
              Cou<span className="text-gray-800">ghing</span>
            </p>
          </div>
        </div>

        {/* Second sec */}
        <div className="bg-[#a7f3d0] rounded-3xl pt-10 px-10 col-span-2 mt-5 md:mb-0 relative">
          <p className="text-4xl font-semibold leading-8 py-6">
            Describe details
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            dolor iure, aut similique corporis dolore sit sunt dolores amet!
            Obcaecati excepturi sed aperiam omnis dolorum eos! Ducimus,
            deserunt! Esse, veritatis.
          </p>
          <div className="w-full md:grid grid-cols-2 overflow-hidden mt-20">
            <div className="col-span-1"></div>
            <div className="col-span-1 object-cover overflow-hidden w-full rounded-3xl md:rounded-t-3xl">
              <img src={anatomy} alt="anat" />
            </div>
          </div>
          <div className="bg-white rounded-3xl md:p-10 md:p-3 p-6 md:absolute shadow-2xl md:w-[60%] md:bottom-20 md:left-10">
            <div className="flex gap-x-1 items-center justify-center mb-4">
              <FaCircle className="fill-purple-100" />
              <FaCircle className="fill-purple-100" />
              <FaCircle className="fill-purple-200" />
              <FaCircle className="fill-purple-400" />
              <FaCircle className="fill-purple-200" />
            </div>
            <p className="md:text-xl font-semibold ">
              What part of your body is bothering you?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
