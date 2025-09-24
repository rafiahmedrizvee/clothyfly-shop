import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/images/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
    const { name,logOut,user } = useContext(AuthContext);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();
    
    // Condition to show the second navbar
    
    const showSecondNavbar = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/men-products' || location.pathname === '/women-products' || location.pathname === '/children-products' || location.pathname === '/accessories';

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
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/100 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center  mb-2 ms-2">
        
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/100 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center  mb-2 ms-2">
       
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-500 shadow-lg shadow-red-500/100 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center  mb-2 ms-2">
       
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/100 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center  mb-2 ms-2">
       
        <NavLink to="/sign-in">Log in</NavLink>
      </li>

  
         <li className="text-black hover:text-white hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600  focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/100 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm font-bold text-center me-2 mb-2 ms-5">
          <NavLink to='/orders'>
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
         
       
          </NavLink>
         </li>
          
      
        
    </React.Fragment>
  );

  return (
    <div className="">
      <div className="navbar  bg-secondary shadow-sm px-10">
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
                            src={
                                user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = process;
                            }}
                        />
              </div>
            </div>
              {
                user?.emailVerified && (
                    <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between">
                        {user?.displayName}
                        <span className="badge">{user?.email}</span>
                    </a>
                </li>
                <li><a>{user?.uid?.slice(0, 7)}</a></li>
                <li>
                    {
                        user?.uid ? <a onClick={logOut}>Logout</a> : <Link to="/login">Sign In</Link>
                    }
                </li>
            </ul>
                )
               }
          </div>
        </div>
      </div>

       {/* Second Navbar (Fixed After Scroll) */}
            
                <div className={`flex justify-evenly items-center fixed  left-0 z-50 bg-black w-full shadow-md py-[15px] ${scrolling ? 'top-0' : 'top-[90px]'}`}>
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
