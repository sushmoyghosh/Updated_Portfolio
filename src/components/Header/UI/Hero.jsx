import React from 'react';
import heroImg from "../img/cv.jpg";
import CountUp from 'react-countup';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { AiOutlineEnvironment,AiFillGithub,AiFillMail,AiFillPhone,AiOutlineInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai';
import Typewriter from 'typewriter-effect';


const Hero = () => {

  

  return (

    
   <section className='pt-20 ' id='hero' >
     <div className='container pt-16'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row '>

        {/*=====hero left content======*/}
        <div className='w-full md:basis-1/2'>
          <h5
          data-aos="fade-right"
          data-aos-duration="1500"
          className='text-dark dark:text-white font-[600] text-[16px]'
          >
          Hello welcome,
           
          </h5>
          <h1 data-aos="fade-up"
          data-aos-duration="1500"
          className='text-dark font-[800] text-[1.8rem] sm:text-[40px] loading-[35px]
          sm:loading-[46px] mt-5'>

          I'm  <span className='text-primaryColor'>Sushmoy Ghosh</span> a <br></br>
          <span  className='text-primaryColor '><Typewriter 
  options={{
    strings: ['Software Engineer','Front-End Developer', 'Web Designer','WordPress Developer', 'Adobe Photoshoper'],
    autoStart: true,
    loop: true,
  }}
/>
           </span>
          </h1>

          

          <div 
          data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-delay="200"
          className='flex items-center gap-6 mt-7'
          >
          
          <button className='bg-primaryColor  text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
          <i class='ri-mail-line'></i>
          <a href='#contact'  >Contact Me</a>
          </button>
          
          <a href='#portfolio' className='group flex items-center text-dark font-[600] text-[16px] border-b border-solid border-dark'>
          See Portfolio
          <span className='text-primaryColor group-hover:rotate-90 duration-300'>
            <MdKeyboardArrowRight size={25} />
          </span>
        </a>
          </div>

          <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex gap-2 text-dark mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
          <span>
            <i class='ri-apps-2-line'></i>
          </span>
          To build a challenging career as an IT professional with a 
renowned organization where I can integrate my knowledge and 
skills and unleash maximum effort to add value to that 
organization and explore my potential.
          </p>

          <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex gap-2 text-dark mt-1 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
          <span className='mt-2'>
            <AiOutlineEnvironment/>
          </span>
          Khilkhet,Nikunjo-2,Dhaka
          </p>
          <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex gap-2 text-dark mt-1 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
          
          <span className='mt-2'>
            <AiFillMail/>
          </span> 
          <a href='mailto:sushmoyghosh96@gmail.com'>sushmoyghosh96@gmail.com</a>
          </p>
          <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex gap-2 text-dark mt-1 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
          
          <span className='mt-2'>
            <AiFillPhone/>
          </span> 
          <a href='tel:+8801719521748'>+8801719521748</a>
          </p>

          <div className='flex items-center gap-9 mt-14'>
            <span className='text-dark text-[15px] font-[800]'> Follow me:
            </span>
            <span>
            <a href='https://www.linkedin.com/in/sushmoy-ghosh-b515141bb/'
            target="_blank" rel='noreferrer'
            className='text-dark text-[10px] font-[600] text-xl' >
            <AiFillLinkedin/>
            </a>
            </span>
            <span>
            <a href='https://www.facebook.com/profile.php?id=100094541456646'
            target="_blank" rel='noreferrer'
            className='text-dark text-[10px] font-[600] text-xl' >
            <AiFillFacebook/>
            </a>
            </span>
            <span>
            <a href='https://www.instagram.com/ghoshmoy_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
            target="_blank" rel='noreferrer'
            className='text-dark text-[10px] font-[600] text-xl'>
            <AiOutlineInstagram/>
            </a>
            </span>
            <span>
            <a href='https://github.com/sushmoyghosh'
            target="_blank" rel='noreferrer'
            className='text-dark text-[10px] font-[600] text-xl'>
            <AiFillGithub/>
            </a>
            </span>
           
          </div>


        </div>
        {/*=====hero left content======
   
    import countUp from 'react-countup';
    */}
    {/* hero img*/}
    <div className='basis-1/3 mt-10 sm:mt-0'>
      <figure 
      
      
      className='flex items-center justify-center
       ring-8 ring-stone-800 ring-offset-8 ring-offset-slate-100'>
           <img 
           data-aos="fade-right"
       data-aos-duration="1800"
       data-aos-delay="200"
         
           src={heroImg} alt='heroimg'/>
      </figure>
    </div>
    {/* hero img*/}
    {/* hero content*/}
    <div className='md:basis-1/5 flex justify-between text-center
    mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
    <div className='mb-10'>
    <h2 className='text-dark font-[700] text-[32px]'>
     <CountUp start={0} end={9} duration={2} suffix="+"/>
    </h2>
    <h4 className='text-dark font-[600] text-[18px]'>
    Months of Experience

    </h4>
    </div>

    <div className='mb-10'>
    <h2 className='text-dark font-[700] text-[32px]'>
     <CountUp start={0} end={21} duration={2} suffix="+"/>
    </h2>
    <h4 className='text-dark font-[600] text-[18px]'>
   Projects Completed

    </h4>
    </div>

    <div className='mb-10'>
    <h2 className='text-dark font-[700] text-[32px]'>
     <CountUp start={0} end={100} duration={2} suffix="%"/>
    </h2>
    <h4 className='text-dark font-[600] text-[18px]'>
    Success Rate

    </h4>
    </div>
    </div>

    {/* hero content*/}


        </div>
     </div>


     
   </section>

   
  )
}

export default Hero;
