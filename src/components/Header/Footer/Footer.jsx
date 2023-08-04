import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {AiFillGithub,AiOutlineInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai';



const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
     <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
        <div className='w-full sm:w-1/2'>
        <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
        Do you want to make a beautiful website?
        </h2>
        <a href='#contact'>
        <button 
     className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 mb-2 px-4 rounded-[8px]'>
     <i class="ri-mail-line"></i>
     Hire me
     </button>
        </a>
        </div>

        <div className='w-full sm:w-1/2'>
         <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
         I'M VERY RESPONSIVE TO MESSAGES.

         <a href='#contact' className='group flex items-center text-dark font-[600] text-[16px] border-b border-solid border-dark'>
         EMAIL ME
          <span className='text-primaryColor group-hover:-rotate-90 duration-300'>
            <MdKeyboardArrowRight size={25} />
          </span>
        </a>
         </p>
         <div className='flex items-center gap-9 mt-14'>
            <span className='text-white text-[15px] font-[800]'> Follow me:
            </span>
            <span>
            <a href='https://www.linkedin.com/in/sushmoy-ghosh-b515141bb/'
            target="_blank" rel='noreferrer'
            className='text-white text-[10px] font-[600] text-xl' >
            <AiFillLinkedin/>
            </a>
            </span>
            <span>
            <a href='https://www.facebook.com/profile.php?id=100094541456646'
            target="_blank" rel='noreferrer'
            className='text-white text-[10px] font-[600] text-xl' >
            <AiFillFacebook/>
            </a>
            </span>
            <span>
            <a href='https://www.instagram.com/ghoshmoy_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
            target="_blank" rel='noreferrer'
            className='text-white text-[10px] font-[600] text-xl'>
            <AiOutlineInstagram/>
            </a>
            </span>
            <span>
            <a href='https://github.com/sushmoyghosh'
            target="_blank" rel='noreferrer'
            className='text-white text-[10px] font-[600] text-xl'>
            <AiFillGithub/>
            </a>
            </span>
           
          </div>

          <div >
          <ul className='flex items-center gap-10 mt-5'>
            <li className='text-gray-400 font-[600]'><a href='#home'>Home</a></li>
            <li className='text-gray-400 font-[600]'><a href='#about'>About</a></li>
            <li className='text-gray-400 font-[600]'><a href='#skill'>Skil</a></li>
            <li className='text-gray-400 font-[600]'><a href='#portfolio'>Portfolio</a></li>
          </ul>
         </div>
        </div>

        
        </div>
        
     </div>
     <div className='bg-[#1b1e29] py-3 mt-14'>
         <div className='container'>
         <div className='flex items-center justify-center sm:justify-beetween'>
         <div className='hidden sm:block'>
         <div className='flex items-center gap-[10px]'>
         <span className=' rounded-full bf-[#2b2d33] text-gray-600 font=[500] text-[18px] flex items-center justify-center '>
         @Copyright by Sushmoy Ghosh - All right reserved.
         </span>
         </div>
         </div>
         </div>
         </div>
        </div>
    </footer>
  )
}

export default Footer;
