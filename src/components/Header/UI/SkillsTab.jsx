import { useState } from "react";
import html from "../img/HTML.png";
import css from "../img/css.png";
import js from "../img/javascript.png";
import react from "../img/ReactJS.jpeg";
import nextjs from "../img/nextjs3.webp";
import github from "../img/github.png";
import tailwind from "../img/tailwind.jpeg";
import wordpress from "../img/WordPress.png";

export default function TabsComponent() {
    const [openTab, setOpenTab] = useState(1);

   
    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
            width: "95%",
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
            width: "90%",
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500',
            width: "85%",
        },
        {
            id:4,
            src:react,
            title:'Reactjs',
            style:'shadow-blue-600',
            width: "80%",
        },
        {
            id:5,
            src:tailwind,
            title:'TailwindCSS',
            style:'shadow-sky-400',
            width: "70%",
        },
        {
            id:6,
            src:nextjs,
            title:'Nextjs',
            style:'shadow-black',
            width: "60%",
        },
        {
            id:7,
            src:github,
            title:'Github',
            style:'shadow-gray-500 ',
            width: "90%",
        },
        {
          id:8,
          src:wordpress,
          title:'WordPress',
          style:'shadow-dark-500 ',
          width: "75%",
      },
    ]
    


    return (
        <div>
            <div className="container w-full mx-auto mt-12">
                <div className="flex flex-col items-center justify-center ">
                    <ul className="flex space-x-2">
                        <li>
                            <a
                                href="#technical"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-primaryColor text-white" : ""} inline-block px-4 py-2  rounded shadow`}
                            >
                            Technical Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#professional"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-primaryColor text-white" : ""} inline-block px-4 py-2   rounded shadow`}


                            >
                            Professional Skills
                            </a>
                        </li>
                        
                    </ul>
                    <div className="p-3 mt-6 bg-white border w-full " >
                        <div className={openTab === 1 ? "block" : "hidden"} id="technical">
                            {" "}
                            <div 
        data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        
        className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 pb-5'>
          {techs.map(({ id, src, title, style, width }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img  src={src} alt='' className='w-20 mx-auto' />
              
              <div className="flex justify-between mb-1">
                <span className="text-base m-1 font-medium text-primaryColor dark:text-white">{title}</span>
                <span className="text-sm m-1 font-medium text-primaryColor dark:text-white">{width}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
                className="bg-primaryColor m-1 h-2.5 rounded-full" style={{ width }} />
              </div>
            </div>
          ))}
        </div>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="professional">
                        <div 
                        data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                        
                        className='w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 pb-5 '>
                          
                            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 mb-20 '>
                              <h6 className='w-20 mb-10 mx-auto'>Team Work</h6>
                              
                              
                              <div>
                        <div className='w-full px-4 '>
                      <div className='mb-2'>
                        <div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
                          <div className='bg-primaryColor absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                            <span className='bg-primaryColor absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                              <span className='bg-primaryColor absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                              90%
                            </span>
                          </div>
                        </div>
                      </div>
                      </div>
                
                      <div>
                      
                
                      </div>
                        </div>
                            </div>
                
                            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 mb-20 '>
                              <h6 className='w-20 mb-10 mx-auto'>Creativity</h6>
                              
                              
                              <div>
                        <div className='w-full px-4 '>
                      <div className='mb-2'>
                        <div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
                          <div className='bg-primaryColor absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                            <span className='bg-primaryColor absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                              <span className='bg-primaryColor absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                              85%
                            </span>
                          </div>
                        </div>
                      </div>
                      </div>
                
                      <div>
                      
                
                      </div>
                        </div>
                            </div>
                
                            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 mb-20 '>
                              <h6 className='w-20 mb-10 mx-auto'>Communication</h6>
                              
                              
                              <div>
                        <div className='w-full px-4 '>
                      <div className='mb-2'>
                        <div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
                          <div className='bg-primaryColor absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                            <span className='bg-primaryColor absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                              <span className='bg-primaryColor absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                              70%
                            </span>
                          </div>
                        </div>
                      </div>
                      </div>
                
                      <div>
                      
                
                      </div>
                        </div>
                            </div>
                            <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 mb-20 '>
                              <h6 className=' mb-10 mx-auto'>Project Management</h6>
                              
                              
                              <div>
                        <div className='w-full px-4 '>
                      <div className='mb-2'>
                        <div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
                          <div className='bg-primaryColor absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                            <span className='bg-primaryColor absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                              <span className='bg-primaryColor absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                              50%
                            </span>
                          </div>
                        </div>
                      </div>
                      </div>
                
                      <div>
                      
                
                      </div>
                        </div>
                            </div>
                
                           
                          
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        


        





        
    );
}