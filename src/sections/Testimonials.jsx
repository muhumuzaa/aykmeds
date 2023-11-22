import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user5 from "../assets/images/user5.png";
import { MdNavigateNext } from "react-icons/md";
const Testimonials = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto mx-10 py-20">
      <h2 className="md:text-5xl text-3xl font-bold mb-10 text-center">
        Stories from customers
      </h2>
      <div className="md:grid grid-cols-2 place-content-center ">
        {/* Circles here */}
        <div className="grid relative col-span-1 place-content-center py-40 px-20">
          {/* big blue */}
          <div className="rounded-full w-[250px] h-[250px] bg-indigo-500 absolute  md:right-[10%] right-[2%] top-[10%] overflow-hidden hover:scale-125 transition duration-1000 hover:rotate-45 hover:translate-x-10 hover:z-40 hover:shadow-2xl ">
            <img src={user3} alt="user" className="object-fill" />
          </div>
          {/* mid left green */}
          <div className="rounded-full w-[150px] h-[150px] bg-emerald-300 absolute md:left-[20%] top-[35%] overflow-hidden hover:scale-125 transition duration-1000 hover:-rotate-45 hover:-translate-x-10 hover:z-40 hover:shadow-2xl ">
            <img src={user5} alt="user" className="object-fill" />
          </div>
          <div className="rounded-full w-[180px] h-[180px] bg-[#D9D9FF] grid place-content-center z-30">
            <p className="text-2xl font-bold mt-2">+100k</p>
            <p>happy clients</p>
          </div>

          {/* yellow small */}
          <div className="rounded-full w-[130px] h-[130px] bg-amber-400 absolute bottom-[10%] right-[40%] z-40 overflow-hidden hover:scale-150 transition duration-1000 hover:rotate-45 hover:z-40 hover:shadow-2xl delay-400 ">
            <img src={user2} alt="user" className="object-cover" />
          </div>
        </div>

        <div className="cols-span-1 grid place-content-center">
          <p className="text-2xl font-semibold">Quick & easy</p>
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            labore voluptatem earum ipsam esse! Ipsum quia maxime quasi
            architecto voluptatibus recusandae omnis repudiandae minus
            cupiditate voluptates? Optio aliquid aspernatur voluptas.
          </p>
          <p className="text-lg font-semibold">Leslie Alexandra</p>
          <p className="text-sm">HR manager</p>
          <div className="flex justify-between mt-10">
            <p className="font-bold">1/3</p>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 p-1 bg-gray-200 rounded-full cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6 bg-black rounded-full p-1 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
