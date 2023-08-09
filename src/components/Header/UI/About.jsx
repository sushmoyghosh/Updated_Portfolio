import React from 'react';
import heroImg from "../img/cv1 (2).png";


const About = () => {
  return (
    <section id="about" className='bg-bgColorOne'>



    <div className='container sm:mx-auto'>
    <div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
  <div>
  <div className=''>
  <figure 
  data-aos="fade-left"
      data-aos-duration="1500"
  
  className='w-80 lg:ml-32 lg:mt-20 lg:block hidden flex items-center justify-center drop-shadow-2xl '>
       <img 
       data-aos="fade-right"
       data-aos-duration="1800"
       data-aos-delay="200"
       className='rounded-full  border-primaryColor border-8 border-double'
       
       src={heroImg} alt='heroimg'/>
  </figure>
</div>
</div>
  <div>
  <div >
       <div className='text-center'>
          <h2 className='text-dark font-[800] text-[2.4rem] mb-5 '>
          About <span className='text-primaryColor'
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-delay="200"
          >Me</span>
          </h2>
       </div>
       <div className=''>
          <h6 className='text-dark font-[400] text-[1.5rem]'>
          I'm Sushmoy and a <span className='text-primaryColor'> Web Developer</span>
          </h6>
          <p className='lg:max-w-[100%]'>
          I have completed my Bachelor of Technology in Computer Science Engineering from Adamas university, West-Bengal,India.I want to build a challenging career as a web developer professional with a renowned organization where I can integrate my knowledge and skills and unleash maximum effort to add value to that organization and explore my potential. I am a self-learner, curious and enthusiastic in learning new things.I have also done an internship where I have done front-end activities and currenty working as a software developer at MHS Planet.

          </p>
       </div>
       
    </div>
  
  </div>
  
</div>

   


    </div>
 </div>



    
    </section>
  )
}

export default About;
