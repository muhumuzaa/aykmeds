import lemonade from '../assets/images/lemonade.png'
import pill from '../assets/images/pill.png'
import tab from '../assets/images/tablet.png'

import doc from '../assets/images/document.png'
import micro from '../assets/images/glassmicros.png'
import phone from '../assets/images/phone.png'
import folder from '../assets/images/folder.png'
const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-40">
      <h2 className="text-5xl font-bold text-center">Services we provide</h2>
      <p className="text-xl py-10 text-center">
        Provisional diagnosis, appointment of check ups, treatment plan and meds
        suggestions
      </p>
      <div className="md:flex gap-2 justify-between space-y-10 md:space-y-0">
        {/* first card */}
        <div className="bg-slate-950 hover:bg-slate-900 rounded-3xl p-10 relative md:hover:shadow-xl md:hover:-rotate-12 md:hover:z-10 transform transition duration-1000">
          <p className="text-xl font-semibold text-gray-200">Track symptoms</p>
          <p className="text-gray-200 py-5 w-[70%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            temporibus itaque quos deleniti iure magni adipisci, ullam
            dignissimos nostrum molestiae, aspernatur quia repudiandae minus
            harum veritatis ipsa fugiat maxime quidem.
          </p>
          <button className="bg-white py-2 px-4 rounded-3xl font-semibold my-4">Learn more</button>
          <div className='w-full flex-1 justify-end flex'>
          <img src={lemonade} alt="lemon" />
          </div>
          <img src={tab} alt="meds" className='w-[60px] absolute bottom-20 rotate-12' />
          <img src={pill} alt="meds" className='w-20 absolute -bottom-15 left-40' />
         
        </div>

        {/* second card */}
        <div className="bg-gray-200 hover:bg-white rounded-3xl p-10 relative md:hover:shadow-xl md:hover:rotate-12 origin-top-right transform transition duration-1000">
          <img src={micro} alt="mcr" className='absolute top-2 w-[60%] left-1'/>
          <img src={doc} alt="docs" className='md:mt-1 ' />
          <p className='text-3xl font-semibold my-6'> Control of health data</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eligendi, ex unde. Reiciendis totam perferendis qui maiores.</p>
        </div>

        {/* Third card */}
        <div className="bg-gray-100 hover:bg-white rounded-3xl p-10 relative md:hover:shadow-2xl md:hover:rotate-12 origin-bottom-left transform transition duration-1000">
          <p className='text-3xl font-semibold my-6'> Control of health data</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eligendi, ex unde. Reiciendis totam perferendis qui maiores.</p>
            <img src={folder} alt="folder" className='absolute md:w-[70%] w-[60%] -right-10 bottom-40'/>
          <img src={phone} alt="phone" className='mt-40'/>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
