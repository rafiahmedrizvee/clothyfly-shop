import React, { useEffect, useState } from 'react';



const ImageSlider = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when the user scrolls down 100px from the top
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const images = [
      
        "https://www.deshal.net/Eid2025/DesktopSliders/Slider3.webp",
        "https://www.deshal.net/Eid2025/DesktopSliders/Slider4.webp",
        "https://richmanbd.com/wp-content/uploads/slider/cache/732f890322150912960524b749868939/Web-Banner_Richman-1.webp",
        "https://richmanbd.com/wp-content/uploads/slider/cache/adebe3b11fc7f1ff5cb1286e314fb3ca/Richman-web-banner-1.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden w-full mt-[45px]">
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full object-cover md:h-[500px] ">
                        <img
                            src={image}
                            alt={`carousel-image-${index}`}
                            className="w-full   h-auto   object-contain cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 outline-1 md:outline-2 outline-red-600 rounded-full bg-red-500 ${currentIndex === index ? "p-1" : "bg-opacity-0"
                            } cursor-pointer transition-all`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

