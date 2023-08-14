import React,{useState,useEffect} from 'react';
import data from '../UI/PortfolioData';
import Modal from './Model';

const Portfolio = () => {

const [showModal,setShowModal] = useState(false);
const [activeID,setActiveId] = useState(null);

const showModelHandler = id =>{
  setShowModal(true)
  setActiveId(id)
}


//load more button 
    const [nextItems, setNextItems] = useState(6);
    const  [portfolios,setPortfolios] = useState(data);

    const loadMoreHandler = ()=>{
        setNextItems(prev=>prev + 3)
    }

const [selectTab,setSelectTab] = useState("all")

useEffect(()=>{
 
   if(selectTab === 'all'){
    setPortfolios(data)
   }
   if(selectTab ==='react_website'){
    const filteredData = data.filter(item=> item.category ==='Reactjs')
    setPortfolios(filteredData)
   }
   if(selectTab ==='Nextjs'){
    const filteredData = data.filter(item=> item.category ==='Nextjs')
    setPortfolios(filteredData)
   }

   if(selectTab ==='responsive_website'){
    const filteredData = data.filter(item=> item.category ==='Responsive')
    setPortfolios(filteredData)
   }
   if(selectTab ==='wordpress'){
    const filteredData = data.filter(item=> item.category ==='WordPress')
    setPortfolios(filteredData)
   }
   
},[selectTab])



  return (
    <section id='portfolio' className='bg-bgColorThree mt-2'>
      <div className='container'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='mb-7 sm:mb-0'>
               <h3 className='text-dark text-[2rem] font-[700]'>
                My recent <span className='text-primaryColor'>Project </span>:
              </h3>
        </div>

        <div className='flex gap-1'>
            <button 
            onClick={()=>setSelectTab('all')}
            className='text-dark  border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
            All
            </button>
            <button 
            onClick={()=>setSelectTab('react_website')}
            className='text-dark border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
            Reactjs
            </button>
            <button 
      onClick={()=>setSelectTab('Nextjs')}
      className='text-dark lg:block hidden border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
      Nextjs
      </button>
           
            <button 
            onClick={()=>setSelectTab('wordpress')}
            className='text-dark border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
            WordPress
            </button>
            <button 
            onClick={()=>setSelectTab('responsive_website')}
            className='text-dark border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
            Responsive
            </button>
          
            
          
           </div>
          

      </div>
      <div className='flex gap-1'>
           
      <button 
      onClick={()=>setSelectTab('Nextjs')}
      className='text-dark mt-2 sm:hidden border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
      Nextjs
      </button>
     </div>

      <div className='flex items-center gap-4 flex-wrap mt-12'>
      {
        portfolios?.slice(0, nextItems)?.map((portfolio,index)=>(
        <div
        key={index}
          data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="50"
           className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>

          <figure>
          <img className='rounded-[8px]' src={portfolio.imgUrl} alt=''/>
          </figure>


          <div  className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
            <div className='w-full h-full flex items-center justify-center'>
              <button
              onClick={()=>showModelHandler(portfolio.id)}
              
              className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font[500] ease-in duration-200'>
              See Details</button>
            </div>
          </div>
        </div>

        ))}
      </div>

      <div className="text-center mt-6">
{/* after finished projects load more button gone */}
      {
        nextItems < portfolios.length && data.length > 6 &&(
          <button
      onClick={loadMoreHandler}
      className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font[500] ease-in duration-200'>
              Load More</button>
        )
      }

      
      
      
      </div>


    </div>

    {
      showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
    }
    </section>
  )
}

export default Portfolio;
