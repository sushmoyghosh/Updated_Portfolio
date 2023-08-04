import React from 'react'

const Contact = () => {
  return (
    <div name="contact" id='contact' 
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
      
         <div className='pb-8'>

         <div className='text-center'>
          <h2 className='text-White font-[800] text-[2.4rem] mt-20'>
          Wanna Contact <span className='text-primaryColor'>Me!</span>
          </h2>
           <p>Submit the form below to get in touch with me</p>
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
           className='text-white bg-primaryColor px-6 mb-20 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
         </form>
         
         </div>
      </div>
    </div>
  )
}

export default Contact
