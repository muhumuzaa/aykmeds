import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import log from "../assets/images/log.png";


const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false)

  const toggleMenu =() =>{
    setMobMenu(!mobMenu)
  }
  return (
    <nav className='bg-white fixed w-full top-0 z-50'>
      <div className='flex  py-4 justify-between max-w-7xl mx-auto px-5'>
        <div className='flex items-center '>
         <a href="/"><img
                src={log}
                alt="meds"
                className="md:h-11 md:w-11 h-8 w-8 bg-[#D9D9FF] rounded-full mx-1 self-center"
              /></a> 
         <div className='hidden md:flex space-x-6 ml-8'>
          <a href="#" className='hover:font-semibold'>Services</a>
          <a href="#" className='hover:font-semibold'>How it works</a>
          <a href="#" className='hover:font-semibold'>Testimonials</a>
         </div>
          
        </div>
        <div className='flex items-center'>
        <button className='bg-black text-gray-100 py-1 px-4 rounded-full hover:bg-green-900'>Sign up</button>
        <button className='md:hidden ml-6' onClick={toggleMenu}>
          {mobMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        
        </button>
        </div>
      </div>
      {mobMenu && (
        <div className='md:hidden px-5 py-10 text-center text-2xl space-y-4 hover:text-gray-600'>
        <a href="#" className='hover:font-semibold block'>Services</a>
        <a href="#" className='hover:font-semibold block'>How it works</a>
        <a href="#" className='hover:font-semibold block'>Testimonials</a>
    </div>
      )}
      

    </nav>
  )
}

export default Navbar