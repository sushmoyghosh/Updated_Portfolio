import React from 'react';
import portfolios from '../UI/PortfolioData';

const Model = ({ activeID, setShowModal }) => {

    const portfolio = portfolios.find(portfolio => portfolio.id === activeID);

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40 model'>
       <div className='max-w-[600px] absolute top-1/2 
       left-1/2 
       z-20 
       bg-white 
       rounded-[8px]
       transform -translate-x-1/2 -translate-y-1/2 p-5'>

       <div>
       <figure>
       <img className='rounded-[8px]' src={portfolio.imgUrl} alt='img'/>
       </figure>
       
       </div>

       <div>
       <h2 className='text-2xl text-handingColor font-[700] my-5'>
       {portfolio.title}
       </h2>

       <p className='text-[15px] leading-7 text-smallTextColor'>{portfolio.description}</p>

       <div className='mt-5 flex items-center gap-3 flex-wrap'>
          <h4 className='text-headingColor text-[18px] text-[900]'>
          Technologies:
          </h4>
          {portfolio.technologies.map((item,index) => (
            <span 
            key={index}
            className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 cursor-pointer hover:text-white hover:bg-primaryColor'>
            {item}
            </span>
  ))}
       </div>
       <a href={portfolio.siteUrl} target="_blank" rel='noreferrer'>
       <button className='bg-primaryColor text-white py-1 px-4 my-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>
       Live Site
       </button>
       </a>
     </div>
     <button 
     onClick={()=> setShowModal(false)}
     className='w-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
       </div>

    
      
    </div>
  );
};
export default Model;
