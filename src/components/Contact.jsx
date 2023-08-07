import Footer from './Footer.jsx';
const Contact = ()=> {
const date = new Date();

  return (
    <div id='contacts' className='pt-[80px] bg-[#0b0e0a] text-white w-full min-h-screen flex flex-col justify-center px-2 sm:px-0 sm:items-center  '>
      <div>
        <div>
        <h1 className="text-4xl border-b-4 inline-block border-[#6ccdda] mb-4">Contact</h1>
        <p># Submit the form below or send me an email - mohammedrafits6@gmail.com</p>
      </div>
      <form action="https://getform.io/f/324d481c-4ac7-4cdd-9117-a96f52d6ab62" method="POST" className="flex flex-col mt-6 text-black ">
        <input className="my-2 p-1 px-2 rounded-sm outline-none bg-[#add8e6]" type="text" name="name" id="name" placeholder="Enter your name" />
        <input className="my-2 p-1 px-2 rounded-sm outline-none bg-[#add8e6]" type="email" name="email" id="mail" placeholder="Enter your e-mail"/>
        <textarea className="my-2 p-1 px-2 rounded-sm outline-none bg-[#add8e6] " name="message" id="msg" cols="30" rows="10" placeholder="message..."></textarea>
        <input type="submit" value="Let's Collaborate"  className="text-white my-2 border-2 border-[#999] hover:bg-[#add8e6] hover:text-black hover:border-[#add8e6] duration-300 cursor-pointer p-4 w-auto mx-auto" />
      </form>
      </div>
      <div className='flex flex-col items-center'>
        <Footer/>

        <div className='lg:my-2 mb-8 text-lg'>&copy; {date.getFullYear()} Mohammed Rafi
        </div>
      </div>
    </div>
  )
}
export default Contact
