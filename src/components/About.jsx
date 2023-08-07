const About = ()=> {
  return (
    <div id='about' className="bg-[#0b0e0a] text-white w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex sm:justify-center w-full pl-4">
        <h1 className="text-4xl border-b-4 border-[#86EAF8]">About</h1>
      </div>
      <div className="sm:w-[80%] mt-8 mb-2 grid  sm:grid-cols-2 justify-center">
        <p className="sm:text-right text-4xl mx-4 mb-4">Hi I'm Mohammed Rafi, nice to meet you. Please take a look around. </p>
        <p className="mx-4 text-xl"><span className="border-b border-[#86EAF8]">Qualifications</span> : <b className="text-xl"> BCA </b>at C Abdul Hakeem College Melvisharam Vellore
        From 2018 To 2021
        </p>
        
      </div>
      <p className="mx-4 text-justify max-w-[900px]">I am passionate about building excellent website especially front-end. I good to creating web application. Intend to build a career with leading corporate with committed & dedicated people, which will help me to explore myself fully and realize my potential. I hereby declare that the all furnished information are true to the best of my knowledge. If I got opportunity to join your reputed company, I will explore my talents and dedication to your company.</p>
    </div>
  )
}
export default About
