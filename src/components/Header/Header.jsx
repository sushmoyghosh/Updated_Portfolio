import React,{useRef, useState} from 'react';


const Header = () => {

  const[navbar,setNavbar] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };

 window.addEventListener('scroll', changeBackground);
  
 
  const handleClick = e =>{
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top:location - 80,
      left:0,
    });
  };



  const menuRef = useRef(null);
  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu');
  
  return (
    <div>
      <header className={navbar ? 'head active' : 'head'} >
      <div className='w-full h-[80px] loading-[80px] flex items-center '>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[150px] h[-35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center' >Sushmoy Ghosh
            </span>

          
          </div>

          

          <div className='menu' ref={menuRef} onClick={toggleMenu}>
           <ul className='flex items-center gap-10'>
             <li className='text-smallTextColor font-[600]'><a onClick={handleClick} href='#about'>About</a></li>
             <li className='text-smallTextColor font-[600]'><a onClick={handleClick} href='#skil'>Skil</a></li>
             <li className='text-smallTextColor font-[600]'><a onClick={handleClick} href='#portfolio'>Portfolio</a></li>
             <li className='text-smallTextColor font-[600]'><a onClick={handleClick} href='#contact'>Contact</a></li>
           </ul>
          </div>
          
          <div className='flex items-center gap-4'>
          <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextcolor py-4 px-4 rounded-[8px] max-h-[15px] hover:max-h-[15px]  hover:bg-smallTextColor hover:text-white  ease-in duration-700 '>
           <i class='ri-send-plane-line'>Lets'talk</i>
          </button>
          
          <span onClick={toggleMenu} className='text-2xl textsmallTextColor  md:hidden cursor-pointer hover:smallTextColor '>
          <i class="ri-menu-line"></i>
          </span>
          </div>
          
        </div>
      </div>
      
      </div>
      </header>
    </div>
  )
}

export default Header
