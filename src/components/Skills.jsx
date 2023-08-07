import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import GITHUB from '../assets/github.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import NODE from '../assets/node.png'
const Skills = ()=> {
  return (
    <div id='skills' className="bg-[#0b0e0a]  w-full min-h-screen  text-[#e5e9f8]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full min-h-screen ">
        <div className='pt-[6rem] '>
          <p className="text-4xl border-b-4 inline border-blue-400">Skills</p>
          <p className="py-6">#These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid gap-4 py-8 text-center justify-center items-center lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
           <div className='shadow-md shadow-[#f06529] w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={HTML} alt="html icon" />
            <p className=' my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#2965f1]  w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={CSS} alt="html icon" />
            <p className='my-4'>CSS</p>
          </div>
         <div className='shadow-md shadow-[#f0db4f]  w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={JS} alt="html icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#61dbfb]  w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={REACT} alt="html icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#4dc0b5]  w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={TAILWIND} alt="html icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
           <div className='shadow-md shadow-gray-200 w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={GITHUB} alt="html icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#68a063]  w-[150px] md:w-[200] mx-auto hover:scale-110 duration-500 flex flex-col items-center justify-center h-[150px]'>
            <img className='md:w-20 w-16' src={NODE} alt="html icon" />
            <p className='my-4'>NODE JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
