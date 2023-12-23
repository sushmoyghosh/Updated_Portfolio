import { useState } from "react";
import education from '../img/book.png';
import experience from '../img/work.png';



export default function TabsComponent() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div>
            <div className="container w-full mx-auto mt-12">
                <div className="flex flex-col items-center justify-center ">
                    <ul className="flex space-x-2">
                        <li>
                            <a
                                href="#one"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-primaryColor text-white" : ""} inline-block px-4 py-2  rounded shadow`}
                            >
                            Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#two"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-primaryColor text-white" : ""} inline-block px-4 py-2 rounded shadow`}
 >
                            Education
                            </a>
                        </li>
                        
                    </ul>
                    <div className="p-3 mt-6 bg-white border w-full " >
                        <div className={openTab === 1 ? "block" : "hidden"} id="one">
                            {" "}

                            <div>
                        <div className='flex dlex-col justify-center sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
             <div className='relative text-gray-700 antialiased text-sm font-semibold'>
             {/*middle line verticle */}
                <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'>
                </div>
                {/*left card */}

                <div className='mt-6 sm:mt-0 sm:mb-12 '>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-start w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pr-8'>
                        <div data-aos='fade-right'
                        data-aos-duration='1200'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>

                        <h2 className='text-primaryColor font-[800] mt-3 mb-3 group-hover:text-white group-hover:font-[600]vtext-xl'>
                        Web Developer (Front-End Developer)</h2>
                        <p className='text-[15px]text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                        2nd May 2023 – Present<br/>

                        MHS Planet<br/>
                        
                       Merul Badda,Dhaka</p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>

                    <figure>
                    <img src={experience} alt='Education'/>
                    </figure>
                    </div>
                  </div>
                </div>
                 {/*right card */}
                 <div className='mt-6 sm:mt-0 sm:mb-12 '>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pl-8'>
                        <div data-aos='fade-right'
                        data-aos-duration='1200'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>

                        <h2 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[500] vtext-xl'>
                        Intern as Software Engineer</h2>
                        <p className='text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'> 
                        16th July 2022 – 15th Oct 2022<br/>Digicon Technologies Ltd, Mirpur<br/>Sujat Nagar, Mirpur 12, Dhaka</p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>

                    <figure>
                    <img src={experience} alt='Education'/>
                    </figure>
                    </div>
                  </div>
                </div>
                {/*left card */}

                <div className='mt-6 sm:mt-0 sm:mb-12 '>
                  <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-start w-full mx-auto items-center'>
                      <div className='w-full sm:w-1/2 sm:pr-8'>
                        <div data-aos='fade-right'
                        data-aos-duration='1200'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>

                        <h2 className='text-primaryColor font-[800] mt-3 mb-3 group-hover:text-white group-hover:font-[600]vtext-xl'>
                        Training at Responsive Web Design</h2>
                        <p className='text-[15px]text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                        (8th March 2021 – 1 st Nov 2021)<br/>

                        Creative IT Institute<br/>
                        
                        Dhanmondi-32,Dhaka</p>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>

                    <figure>
                    <img src={experience} alt='Education'/>
                    </figure>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
                        </div>
                          
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="two">
                        
                        <div>
                          <div className='flex dlex-col justify-center sm:py-12'>
                          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                             <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                             {/*middle line verticle */}
                                <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'>
                                </div>
                                {/*left card */}
            
                                <div className='mt-6 sm:mt-0 sm:mb-12 '>
                                  <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                      <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right'
                                        data-aos-duration='1200'
                                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
            
                                        <h2 className='text-primaryColor font-[800] mt-3 mb-3 group-hover:text-white group-hover:font-[600]vtext-xl'>
                                        B.Tech in Computer Science & Engineering</h2>
                                        <p className='text-[15px]text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                        Adamas University (2016-2020),<br/>
            
                                        West Bengal,India.<br/>
                                        
                                        Result: (7.48/10.00)</p>
                                        </div>
                                      </div>
                                    </div>
            
                                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10  absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            
                                    <figure>
                                    <img src={education} alt='Education'/>
                                    </figure>
                                    </div>
                                  </div>
                                </div>
                                 {/*right card */}
                                 <div className='mt-6 sm:mt-0 sm:mb-12 '>
                                  <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                      <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-right'
                                        data-aos-duration='1200'
                                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
            
                                        <h2 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600]vtext-xl'>
                                        HSC (2016)</h2>
                                        <p className='text-[15px]text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'> 
                                        Islamia Degree College<br/>Chittagong,Bangladesh<br/>Result: (3.50/05.00)</p>
                                        </div>
                                      </div>
                                    </div>
            
                                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            
                                    <figure>
                                    <img src={education} alt='Education'/>
                                    </figure>
                                    </div>
                                  </div>
                                </div>
                                {/*left card */}
            
                                <div className='mt-6 sm:mt-0 sm:mb-12 '>
                                  <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                      <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right'
                                        data-aos-duration='1200'
                                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
            
                                        <h2 className='text-primaryColor font-[800] mt-3 mb-3 group-hover:text-white group-hover:font-[600]vtext-xl'>
                                        SSC (2014)</h2>
                                        <p className='text-[15px]text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                        Raipur Merchants Academy,<br/>
            
                                        Lakshmipur,Bangladesh<br/>
                                        
                                        Result: (4.94/05.00)</p>
                                        </div>
                                      </div>
                                    </div>
            
                                    <div className='rounded-full bg-primaryColor border-primaryColor border-8 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            
                                    <figure>
                                    <img src={education} alt='Education'/>
                                    </figure>
                                    </div>
                                  </div>
                                </div>
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