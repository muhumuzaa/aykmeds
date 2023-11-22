import meds from "../assets/images/meds.svg";
import apps from "../assets/images/appds.png";
import handphone from "../assets/images/handphone.png";

const InstallApp = () => {
  return (
    <div>
      <div className="md:max-w-7xl md:mx-auto mx-10 bg-gray-100  rounded-3xl md:grid grid-cols-2 p-3 gap-20">
        <div className="rounded-3xl bg-[#D9D9FF] cols-span-1">
          <img src={handphone} alt="phone" className="pt-10" />
        </div>
        <div className="col-span-1 grid content-center md:px-30 px-10 md:py-0 py-20">
          <h2 className="font-bold text-4xl">Treatment is easy with</h2>

          <h2 className="font-bold italic text-4xl">
            <span className="inline-flex px-1 mt-2">
              <img
                src={meds}
                alt="meds"
                className="w-8 h-8 p-1 rounded-full bg-[#FEE4C9]"
              />
            </span>
            Heal app
          </h2>

          <p className="py-6">
            We're constantly expanding the breadth our services, and growing our
            team of highly qualified health professionals
          </p>
          <a href="#">
            <img src={apps} alt="apps" className="w-[80%]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
