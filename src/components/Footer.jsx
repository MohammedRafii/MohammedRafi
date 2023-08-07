import React from 'react'
import Resume from '../assets/Resume.pdf';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
return (
<>
  <footer className='mt-6 mb-4 text-center lg:hidden  w-[280px]' >
      <div className='my-4 w-full flex justify-between'>
          <a  className='bg-[#333] p-2 rounded-full'
              href="https://github.com/MohammedRafii" target='_blank'>
              <FaGithub size={30} />
          </a>
          <a
          className='bg-blue-700 p-2 rounded-full'
    href="https://www.linkedin.com/in/mohammed-rafi-t-s-59ba88216" target='_blank'>
    <FaLinkedinIn size={30} />
  </a>
  <a
  className='bg-[#6fc2b0] p-2 rounded-full'
    href="mailto:mohammedrafi0271@gmail.com"  target='_blank'>
    <HiOutlineMail size={30} />
  </a>
  <a
  className='bg-[#565f69] p-2 rounded-full'
    href={Resume} target='_blank'
  >
    <BsFillPersonLinesFill size={30} />
  </a>
      </div>
      
  </footer>
</>
)
}

export default Footer