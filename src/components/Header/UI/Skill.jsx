import React from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'; 


const Service = () => {


     

  return (
    <section id="skill">
    <div className='container lg:pt-5'>
       <div className='text-center'>
          <h2 className='text-dark font-[800] text-[2.4rem] mb-5'>
          Why Should you hire <span className='text-primaryColor'>Me!</span>
          </h2>
       </div>
       <div className=''>
          <h6 className='text-dark font-[400] text-[1.5rem]'>
          As a <span className='text-primaryColor'>Web Developer</span>,
          </h6>
          <p className='lg:max-w-[100%]'>
          I'm a Front-end Developer.I code and create web elements for amazing people around the world. I like work with new people & new environment.New people = new Experiences.<br/>
          For the betterment of my skills, I have also completed a course on Responsive web design from 
          Institute Creative IT, Dhaka.I'm trying my best to learn as much as possible from net,different websites,LinkedIn learning and youtube for better knowledege & to update myself for this updated generation regularly.To see my work:
          <a href='#portfolio'
             className='group flex items-center text-dark font-[600] text-[16px]  '
          >
          Go to my Portfolio
          <span className= 'text-primaryColor group-hover:-rotate-90 duration-300'><MdOutlineKeyboardArrowRight size= {25}/></span>
          </a>
          </p>
       </div>
       <div>
       
       
       

       </div>
    </div>
    </section>
  )
}

export default Service
