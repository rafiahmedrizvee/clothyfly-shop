import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';


const Header = () => {

          
    const [hoveredItem, setHoveredItem] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    
    // Condition to show the second navbar
   

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const navItems = (
    <React.Fragment>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center me-2 mb-2">
        
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center me-2 mb-2">
       
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center me-2 mb-2">
       
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center me-2 mb-2">
       
        <NavLink to="/log-in">Log in</NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="">
      <div className="navbar  bg-[#f7f7f7] shadow-sm px-10">
        <div className="navbar-start justify-between md:justify-start w-[65%] md:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/">
            <img className="w-30 h-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end w-[35%] md:w-[50%] ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

       {/* Second Navbar (Fixed After Scroll) */}
            
                <div className={`flex justify-evenly items-center fixed  left-0 z-50 bg-black w-full shadow-md py-[10px] ${scrolling ? 'top-0' : 'top-[100px]'}`}>
                    <motion.div className='w-[800px] flex justify-evenly items-center font-semibold md:font-bold'>
                        <div
                            className=''
                            onMouseEnter={() => setHoveredItem('men')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/men-products" className='text-white cursor-pointer'>
                                MEN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'men' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('women')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/women-products" className='text-white cursor-pointer'>
                                WOMEN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'women' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('children')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/children-products" className='text-white cursor-pointer'>
                                CHILDREN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'children' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('accessories')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/accessories-products" className='text-white cursor-pointer'>
                                ACCESSORIES
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'accessories' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                    </motion.div>
                </div>
         
    </div>
  );
};

export default Header;
