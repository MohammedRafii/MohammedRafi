import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="bg-[#0b0e0a] w-full min-h-screen" id="home">
      <div className=" max-w-[950px] mx-auto flex flex-col relative top-[30vh] md:top-[25vh]  sm:top-[20vh]  justify-center  px-10">
        <p className="relative text-[#81effd] z-2">
          Hi, I am
          <span className=" bg-[url('./assets/logo.svg')] top-[-85px] md:top-[-79px]  sm:bg-[length:500px_400px] w-[300px]   absolute bg-no-repeat  bg-center  bg-[length:300px_300px] opacity-[.3] h-[400px]  sm:w-[500px]"></span>
        </p>
        <div className="relative">
          <h1 className=" text-4xl sm:text-7xl font-bold text-[#e5e9f8]">
            Mohammed Rafi
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#9ca5be]">
            I'm a Front End Developer
          </h2>
        </div>
        <p className="py-4 max-w-[700px] text-[#9fa8c2] ">
          I'm a front-end developer specializing in building (and occasionally
          designing) exceptional digital experience. Currently, I'm focused on
          building responsive web application.
        </p>
        <div className="w-[180px]">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <button className="text-white hover:text-black border-2 group py-4 px-3 my-2 hover:bg-[#add8e6] hover:border-[#add8e6] duration-300 relative  cursor-pointer  flex items-center">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
