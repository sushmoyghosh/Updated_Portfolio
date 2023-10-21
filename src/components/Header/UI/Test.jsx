import { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";



export default function TabsComponent() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div>
            <div className="container w-full mx-auto mt-12">
                <div className="flex flex-col items-center justify-center ">
                    <ul className="flex space-x-2 bg-white rounded-lg border-2 p-2 pl-5 pr-5 mt-4">
                        <li>
                            <a
                                href="#one"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-yellow-500 text-white" : ""} inline-block px-4 py-2  rounded shadow`}
                            >
                            Flight
                            </a>
                        </li>
                        <li>
                            <a
                                href="#two"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-yellow-500 text-white" : ""} inline-block px-4 py-2 rounded shadow`}
 >
                            Hotel
                            </a>
                        </li>
                        <li>
                            <a
                                href="#three"
                                onClick={() => setOpenTab(3)}
                                className={` ${openTab === 3 ? "bg-yellow-500 text-white" : ""} inline-block px-4 py-2 rounded shadow`}
 >
                            Tour
                            </a>
                        </li>
                        
                    </ul>
                    <div className=" p-3 mt-6 bg-white border w-full " >
                        <div className={openTab === 1 ? "block" : "hidden"} id="one">
                            {" "}

                            <div className="mt-5">
                            <form action="" >
      <input  type="radio"  value="oneWay" name="gender"/>
      <label class="pr-3 pl-1"> One Way</label>
      <input  type="radio" value="roundCity" name="gender"/>
      <label class="pr-3 pl-1">Round City</label> 
      <input type="radio" value="multiCity" name="gender"/>
      <label class="pr-3 pl-1"> Multy City</label> 
     
    </form>
                            
                            </div>
                        
                            <div  className='w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-6 gap-1  px-12 sm:px-0 pb-2 '>

                            <div className='relative w-full grid grid-cols-2 sm:grid-cols-2 gap-2  py-8 sm:px-0 pb-1 '>

                            <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
            <p className='text-[12px] text-gray-500'>From</p>
            <h6 className=' mx-auto'>Location</h6>
              <p className='text-[12px] text-gray-500'>Where are you going?</p>
            </div>
           

            <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2  '>
            <p className='text-[12px] text-gray-500'>To</p>
            <h6 className=' mx-auto'>Location</h6>
              <p className='text-[12px] text-gray-500'>Where are you going?</p>
            </div>
                            </div>
                            
                            <div className="sm:block hidden ml-40 absolute mt-14  bg-white rounded-full p-3 border-1 text-lg"><AiOutlineSwap/></div>
                           
             
            

           <div className='w-full grid grid-cols-2 sm:grid-cols-2  py-8  sm:px-0 pb-1 '>
           <div className='  shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
             <p className='text-[12px] text-gray-500'>Journey Date</p>
             <h6 className=' mx-auto'>25 <span className='text-[12px] text-gray-500'>Sep23</span> </h6>
              <p className='text-[12px] text-gray-500'>Monday</p>
            </div>
           

            <div className='  shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2  '>
            <p className='text-[12px] text-gray-500'>Return Date</p>
            <h6 className=' mx-auto'>28 <span className='text-[12px] text-gray-500'>Sep23</span> </h6>
              <p className='text-[12px] text-gray-500'>Friday</p>
            </div>
           </div>

           <div className='w-60 grid grid-cols-1 sm:grid-cols-1  py-8  sm:px-0 pb-1 '>
           <div className='shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2  '>
            <p className='text-[12px] text-gray-500'>Traveler,Class</p>
              <h6 className=' mx-auto'>1 Traveler</h6>
              <p className='text-[12px]'>Economy</p>
            </div>
           </div>

            
          

            
 </div>
 <div className=' text-center mt-5'>
 <button class=" rounded-md  bg-yellow-500  text-white px-6 p-4">Search</button>
 </div>
                          
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="two">
                        
                        <div  className='w-full grid grid-cols-1 sm:grid-cols-4 gap-2  px-12 sm:px-0 pb-2 '>

                        <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
                        <p className='text-[12px] text-gray-500'>CITY/HOTEL/RESORT/AREA</p>
                        <h6 className=' mx-auto'>Location</h6>
                          <p className='text-[12px] text-gray-500'>Country</p>
                        </div>

                        <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
                        <p className='text-[12px] text-gray-500'>CHECK IN</p>
                        <h6 className=' mx-auto'>25 <span className='text-[12px] text-gray-500'>Sep23</span> </h6>
                          <p className='text-[12px] text-gray-500'>Monday</p>
                        </div>

                        <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
                        <p className='text-[12px] text-gray-500'>CHECK OUT</p>
                        <h6 className=' mx-auto'>25 <span className='text-[12px] text-gray-500'>Sep23</span> </h6>
                          <p className='text-[12px] text-gray-500'>Monday</p>
                        </div>

                        <div className=' relative shadow-md text-center hover:scale-105 duration-500 py-4 rounded-lg border-2   '>
                        <p className='text-[12px] text-gray-500'>ROOMS & GUESTS</p>
                        <h6 className=' mx-auto'>2 <span className='text-[12px] text-gray-500'>Room,</span><span>3</span><span className='text-[12px] text-gray-500'>Guests</span> </h6>
                          <p className='text-[12px] text-gray-500'>2 Adults</p>
                        </div>

</div>
<div className="mt-5 ">
<div className='grid grid-cols-1 sm:grid-cols-2 divide-x'>

<div >
<form action="" >
<label className="mr-2" for="Search"> Search For:</label>
<input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className="ml-1" for="vehicle1"> Business</label>
<input className="ml-1" type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
<label className="ml-1" for="vehicle2"> Couples</label>
<input className="ml-1" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label className="ml-1" for="vehicle3">Families</label>
<input className="ml-1" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label className="ml-1" for="vehicle3">Friends</label>
<input className="ml-1" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label className="ml-1" for="vehicle3">Solo</label>

</form>
</div>
<div className='sm:text-right text-center '>
<button class=" rounded-md  bg-yellow-500  text-white px-6 p-4">Search</button>
</div>


</div>
    
    
    </div>
                        </div>

                        <div className={openTab === 3 ? "block" : "hidden"} id="three">
                            {" "}

                            <div  className='w-full grid grid-cols-1 sm:grid-cols-1   px-12 sm:px-0 pb-2 '>

                        <div className=' relative shadow-md p-5  py-4 rounded-lg border-2   '>
                        <p className='text-[12px] text-gray-500'>CITY/HOTEL/RESORT/AREA</p>
                        <h6 className=' mx-auto'>Location</h6>
                          <p className='text-[12px] text-gray-500'>Country</p>
                        </div>
                        <div className=' text-center mt-5'>
            <button class=" rounded-md  bg-yellow-500  text-white px-6 p-4">Search</button>
            </div>
                        
                        
                    </div>
                        </div>

                            
                          
                        </div>
                        
                </div>

                
            </div>
            
        </div>

        


        





        
    );
}