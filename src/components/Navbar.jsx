import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import Resume from "../assets/Resume.pdf";
import useClickOutside from "../useClickOutside";

import { useRef, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refs = useRef();
  useClickOutside(refs, () => {
    setIsOpen(!isOpen);
  });

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="bg-[#0b0e0a] top-0 fixed z-20  text-[#fff] h-[80px] w-full flex justify-between items-center px-4 ">
      <div>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <img src={Logo} alt="logo img" style={{ width: "80px" }} />
        </Link>
      </div>
      <ul className="md:flex hidden">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer active:text-[#86EAF8] hover:text-[#86EAF8] duration-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer active:text-[#86EAF8] hover:text-[#86EAF8] duration-100"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer active:text-[#86EAF8] hover:text-[#86EAF8] duration-100"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer active:text-[#86EAF8] hover:text-[#86EAF8] duration-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer active:text-[#86EAF8] hover:text-[#86EAF8] duration-100"
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-10 cursor-pointer"
      >
        {!isOpen ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul
          ref={refs}
          className={
            !isOpen
              ? "hidden"
              : "mobileMenu flex absolute rounded-md top-0 right-0 w-[200px] h-screen shadow-lg md:hidden shadow-[#4df1f1] text-white pb-[80px] text-2xl flex-col justify-center items-center "
          }
        >
          <li className="pb-8">
            <Link
              onClick={handleClick}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="active:text-[#86EAF8] duration-100 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="pb-8">
            <Link
              onClick={handleClick}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="active:text-[#86EAF8] duration-100 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="pb-8">
            <Link
              onClick={handleClick}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="active:text-[#86EAF8] duration-100 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="pb-8">
            <Link
              onClick={handleClick}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="active:text-[#86EAF8] duration-100 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li lassName="pb-8">
            <Link
              onClick={handleClick}
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className="active:text-[#86EAF8] duration-100 cursor-pointer"
            >
              Contacts
            </Link>
          </li>
        </ul>
      )}

      {/* Social Media */}
      <div className="hidden fixed lg:flex top-[35%] left-0  ">
        <ul>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex bg-[#333]  ">
            <a
              className="flex w-full items-center text-gray-300 justify-between ml-4"
              href="https://github.com/MohammedRafii"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between bg-blue-700 items-center ">
            <a
              className="flex w-full items-center text-gray-300 justify-between ml-4"
              href="https://www.linkedin.com/in/mohammed-rafi-t-s-59ba88216"
              target="_blank"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between bg-[#6fc2b0] items-center ">
            <a
              className="flex w-full items-center text-gray-700 justify-between ml-4"
              href="mailto:mohammedrafi0271@gmail.com"
              target="_blank"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 flex justify-between bg-[#565f69] items-center ">
            <a
              className="flex w-full items-center text-gray-300 justify-between ml-4"
              href={Resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
