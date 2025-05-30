import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import { Toaster } from 'react-hot-toast';
import Product from './Products/Product';
import HomeProducts from './Products/HomeProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

     
        return (
              <div>
            <Toaster />
            <div>
                <ImageSlider></ImageSlider>
            </div>
            <div className='flex justify-center my-[10px] md:my-[20px] lg:my-[25px] '>
                <div className=' lg:w-6/6 '>
                
                    <img src="https://www.deshal.net/noya/3.webp" alt="" className='cursor-pointer h-[75px] md:h-auto' />
                </div>
            </div>
            <div className=" flex justify-center">
                <div className=' xl:w-5/6 gap-3 mx-2  grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-2'>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                      <Link to='/men-products' >
                      <h3 className='text-center md:text-5xl text-2xl font-bold md:font-extrabold text-primary pb-10'>MEN</h3>
                        <img src="https://www.deshal.net/web/men.jpg" alt="" className="w-full object-cover relative z-0  transition-all duration-500  hover:scale-110 " />
                      </Link>
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                      <Link to='/women-products'>
                      <h3 className='text-center md:text-5xl text-2xl font-bold md:font-extrabold text-primary pb-10'>WOMEN</h3>
                        <img src="https://www.deshal.net/web/women.jpg" alt="" className="w-full object-cover relative z-0  transition-all duration-500 hover:scale-110" />
                      </Link>
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                      <Link to='/children-products'>
                      <h3 className='text-center md:text-5xl text-2xl font-bold md:font-extrabold text-primary pb-10'>CHILDREN</h3>
                        <img src="https://www.deshal.net/web/kid.jpg" alt="" className="w-full object-cover relative z-0  transition-all duration-500 hover:scale-110" />
                      </Link>
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                      <Link to='/accessories-products'><h3 className='text-center md:text-5xl text-2xl font-bold md:font-extrabold text-primary pb-10'>ACCESSORIES</h3>
                        <img src="https://www.deshal.net/images/MainCategories/HomePageAccessoriesCoverPhoto.jpg" alt="" className="w-full h-full object-cover relative z-0  transition-all duration-500 hover:scale-110 " />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center my-[25px]'>
                <div className='mx-1 lg:w-5/6'>
                    <img src="https://www.deshal.net/noya/2.webp" alt="" className='cursor-pointer w-full h-[75px] md:h-auto' />
                </div>
            </div>
            <div className='flex justify-center items-center mt-[15px] md:mt-[40px] xl:my-[80px] font-bold xl:text-3xl'>
                <h1>CHOOSE YOUR FAVOURITE PRODUCT</h1>
            </div>
            <Product></Product>
            <div className=''>
                <div className='flex  justify-center items-center object-contain overflow-hidden mx-2 gap-2'>
                    <div className=' relative  overflow-hidden cursor-pointer'>
                        <img className=' object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/NS-web-square-banner2_800x800_crop_center.jpg?v=1738834638" alt="" />
                    </div>
                    <div className='relative  overflow-hidden cursor-pointer'>
                        <img className=' object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/mens-casual_800x800_crop_center.jpg?v=1727070538" alt="" />
                    </div>
                </div>
            </div>
            <HomeProducts></HomeProducts>
            <div className='flex justify-center items-center xl:my-[80px] font-bold text-xl lg:text-3xl'>
                <h1>PICK YOUR FAVOURITES</h1>
            </div>
            <div className="flex justify-center md:w-5/6 my-[20px] md:my-[40px]">
                <div className='grid grid-cols-2 xl:grid-cols-3  gap-2 xl:gap-4 mx-2'>
                    <div className=" lg:h-[500px] lg:w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/women_fba2b8ad-586d-4fce-8e62-50d0486dbe44_800x800_crop_center.jpg?v=1727068376" alt="" />
                    </div>
                    <div className=" lg:h-[500px] lg:w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/mens-formal_800x800_crop_center.jpg?v=1727068128" alt="" />
                    </div>
                    <div className=" lg:h-[500px] lg:w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/bags_feff123a-1643-4e72-8e3b-762049436368_800x800_crop_center.jpg?v=1727068282" alt="" />
                    </div>
                    <div className="xl:hidden  lg:h-[500px] lg:w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/women_fba2b8ad-586d-4fce-8e62-50d0486dbe44_800x800_crop_center.jpg?v=1727068376" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center my-[30px] lg:my-[80px] font-bold text-xl lg:text-3xl'>
                <h1>OUR OTHER EVENTS</h1>
            </div>
            <div className=" my-10 ">
                <div className='grid grid-cols-2  gap-3 mx-2'>
                    <div className="lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/north_640x.jpg?v=1720336875" alt="" />
                    </div>
                    <div className="lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/234_fefc05a8-6063-42e9-a013-119ac6f8d7a8_640x.jpg?v=1720936117" alt="" />
                    </div>
                    <div className="lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/comp1_640x.jpg?v=1692859629" alt="" />
                    </div>
                    <div className="lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/north1_640x.jpg?v=1692859497" alt="" />
                    </div>
                    <div className="lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/aishoe_640x.jpg?v=1720338268" alt="" />
                    </div>
                    <div className="lg:hidden lg:h-[250px] lg:w-[250px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/north_640x.jpg?v=1720336875" alt="" />
                    </div>
                </div>
            </div>
            <div>
                {/* Scroll to top button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="flex justify-center items-center fixed bottom-12 right-12 p-3 h-[55px] object-cover w-[55px] bg-gray-300 font-bold hover:text-white  rounded-full shadow-lg hover:bg-black transition-all"
                    >
                        <FontAwesomeIcon className='w-9 h-5 font-bold' icon={faAngleUp} />
                    </button>
                )}
            </div>
        </div>
        );
};

export default Home;