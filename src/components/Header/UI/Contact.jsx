import React from 'react';
import heroImg from "../img/cv1 (1).png";

const Contact = () => {
  return (
   
    <section id="contact" className='bg-bgColortwo'>



    <div className='container sm:mx-auto '>
    <div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
  <div>
  <div >
  <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto '>
   
  <div className=''>

  <div className='text-center'>
   <h2 className='text-white font-[800] text-[2.4rem] mt-2'>
   Wanna Contact <span className='text-primaryColor'>Me!</span>
   </h2>
    <p className='text-white mb-2'>Submit the form below to get in touch with me</p>
</div>
  </div>

  <div className='flex justify-center items-center'>
  <form action='https://getform.io/f/686be81a-2f19-4a13-be16-2e74df306938' 
  method='post'
  className='flex flex-col w-full md:w-1/2'>
   <input type='text' name='name'
   placeholder='Enter your name' required
   className='p-2 bg-transparent border-2 rounded-md 
   text-white focus:outline-none'></input>

   <input type='text' name='email'
   placeholder='Enter your email' required
   className='my-4 p-2 bg-transparent border-2 rounded-md 
   text-white focus:outline-none'></input>

   <textarea 
   name='message'
   placeholder='Enter your message' required
    rows="10"
    className='p-2 bg-transparent border-2 rounded-md 
   text-white focus:outline-none'
    ></textarea>

    <button 
    className=' text-white bg-primaryColor px-6  py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
  </form>
  
  </div>
</div>
 
  
  </div>
</div>
  <div>
  <div >
       
  

<figure 
className='w-80 lg:ml-32 lg:mt-20 lg:block hidden flex items-center justify-center drop-shadow-2xl '>
    <img 
    data-aos="fade-left"
    data-aos-duration="1800"
    data-aos-delay="200"
    className='rounded-full  border-primaryColor border-8 p-2'
    
    src={heroImg} alt='heroimg'/>
</figure>
       
    </div>
  
  </div>
  
</div>

   


    </div>
 </div>
 </section>
    



    
  )
}

export default Contact;



