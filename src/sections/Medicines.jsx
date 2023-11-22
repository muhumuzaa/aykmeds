const Medicines = () => {
  return (
    <div className="bg-gray-100 rounded-3xl md:flex md:items-center md:justify-center md:max-w-7xl md:mx-auto md:p-40 p-5 my-10 px-10 md:gap-4 space-y-4">
      <div className="bg-white rounded-3xl px-5 py-5 md:translate-x-12 hover:transform-none md:hover:transform md:rotate-12 shadow-2xl transition duration-1000 ">
        <p className="text-gray-500">Eye drops</p>
        <p className="font-semibold my-5">Bionorica Gold</p>

        <div className="flex space-x-2">
          <button className="py-1 px-4 bg-[#a7f3d0] rounded-3xl">1 drop</button>
          <button className="py-1 px-4 bg-[#a7f3d0] rounded-3xl">
            Every 6-8 hours
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl px-5 py-5 hover:transform hover:rotate-12 hover:shadow-2xl transition duration-1000">
        <div className="flex justify-between">
          <p className="text-gray-500">Cough medicine</p>
          <p className="text-sm underline">Details</p>
        </div>
        <p className="font-semibold my-5">Bionorica Gold</p>

        <div className="flex justify-between space-x-2">
          <button className="py-1 px-4 bg-[#D9D9FF] rounded-3xl">
            Morning
          </button>
          <button className="py-1 px-4 bg-[#D9D9FF] rounded-3xl">Day</button>
          <button className="md:py-1 md:px-4 md:p-2 p-1 px-2 bg-[#D9D9FF] rounded-3xl">
            Before meals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
