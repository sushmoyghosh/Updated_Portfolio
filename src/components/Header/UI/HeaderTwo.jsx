import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BiSolidSun} from 'react-icons/bi';
import {BsMoonStars} from 'react-icons/bs';
import { Link } from 'react-scroll';

const HeaderTwo = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'skill',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
    

  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <div className={navbar ? 'head active' : 'head'}>
      <div className='flex px-4 justify-between items-center w-full h-20 text-dark'>
        <div>
          <h1 className='text-5xl text-primaryColor font-logo ml-2 '>Sushmoy Ghosh</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-primaryColor"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}

           {/* dark mood */}
           <label className="swap swap-rotate">
      <input
       onClick={toggleTheme} type="checkbox" />
      <div className="swap-on "><BsMoonStars/></div>
      <div className="swap-off"><BiSolidSun/></div>
    </label>

         
        </ul>

        <div
        onClick={()=> setNav(!nav)}
         className='cursor-pointer pr-4 z-10 text-dark md:hidden toggle'>
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}
        </div>

        {/* toggle menu*/}

        {
            nav &&(
              <ul className="flex flex-col justify-center items-center gap-3 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-3xl py-6 hover:text-primaryColor"
                >
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            )
        }
      </div>
    </div>
  )
}

export default HeaderTwo;
