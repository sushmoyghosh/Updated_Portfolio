import React from 'react';
import Carousel from 'better-react-carousel';
import testImg1 from "../img/testiminial1.jpg";
import testImg2 from "../img/testiminial2.jpg";
import testImg3 from "../img/testiminial3.jpg";

const Testimonial = () => {
  return (
   <div className='bg-bgColorOne'>
    <div className='container mx-auto p-4 lg:p-10 bg-bg'>
    <div className='text-center'>
          <h2 className='text-dark font-[800] text-[2.4rem] mb-5 '>
          Testimonial
          </h2>
       </div>
      <Carousel loop>
        <Carousel.Item>
          <div className='flex flex-col sm:flex-row lg:p-10'>
            <div className='mx-auto mb-4 sm:mb-0 sm:mr-4'>
              <img className='rounded-full w-20 h-20 sm:w-28 sm:h-28' src={testImg1} alt='heroimg' />
            </div>
            <div className='text-center sm:text-left'>
              <h5 className='text-dark font-semibold mb-3 sm:mb-5'>
                "Sushmoy consistently brings fresh perspectives to our team discussions, contributing innovative ideas that push the boundaries of what's possible."
              </h5>
              <p className='text-dark font-bold'>Debashon Chakraborty</p>
              <p className='text-dark font-normal text-sm sm:text-base'>Team Leader of Developer Team at Digicon Technology Ltd.</p>
            </div>
          </div>
        </Carousel.Item>

        {/* ... other Carousel.Item components ... */}

        <Carousel.Item className='lg:block hidden'>
          <div className='flex flex-col sm:flex-row lg:p-10'>
            <div className='mx-auto mb-4 sm:mb-0 sm:mr-4'>
              <img className='rounded-full w-20 h-20 sm:w-28 sm:h-28' src={testImg2} alt='heroimg' />
            </div>
            <div className='text-center sm:text-left'>
              <h5 className='text-dark font-semibold mb-3 sm:mb-5'>
              "Sushmoy's exceptional project management skills ensure that tasks are organized, milestones are met, and projects are delivered on time and within scope."
              </h5>
              <p className='text-dark font-bold'>Md. Mehedi Hasan</p>
              <p className='text-dark font-normal text-sm sm:text-base'>Project Manager of MHS Planet</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className='lg:block hidden'>
          <div className='flex flex-col sm:flex-row lg:p-10'>
            <div className='mx-auto mb-4 sm:mb-0 sm:mr-4'>
              <img className='rounded-full w-20 h-20 sm:w-28 sm:h-28' src={testImg3} alt='heroimg' />
            </div>
            <div className='text-center sm:text-left'>
              <h5 className='text-dark font-semibold mb-3 sm:mb-5'>
              "Sushmoy's exceptional communication skills foster a collaborative and inclusive environment, where team members feel empowered to share ideas and insights."
              </h5>
              <p className='text-dark font-bold'>Tasnin Jahan Tithi</p>
              <p className='text-dark font-normal text-sm sm:text-base'>Developer team Member of MHS Planet</p>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
    </div>
  );
}

export default Testimonial;
