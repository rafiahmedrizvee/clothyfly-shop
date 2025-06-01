import React, { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartContextApi } from '../../Context/CartContext';

const AccessoriesProducts = () => {
         const { handleAddToCart } = useContext(CartContextApi);
    const [accessoriesProduct, setAccessoriesProduct] = useState([]);
    useEffect(() => {
        fetch("accessoriesProductsCategory.json")
            .then((res) => res.json())
            .then((data) => setAccessoriesProduct(data))
    }, [])
        return (
               <div className=" mt-[100px] md:mt-[140px] mb-[50px] flex justify-center">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-3 '>
                <Toaster />
                {
                    accessoriesProduct.map(accessories => (
                        <div key={accessories.id} className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:w-[200px] xl:h-[450px] xl:w-[300px]">
                            {/* Product Image */}
                            <figure>
                                <div className='w-full relative mx-auto h-auto overflow-hidden rounded-lg '>
                                    <img
                                        className=" h-[130px] md:h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                                        src={accessories.img || notFoundImg}
                                        onError={(e) => {
                                            e.target.onError = null;
                                            e.target.src = notFoundImg;
                                        }}
                                        alt={accessories.img ? name : ""}
                                    />
                                </div>
                            </figure>

                            {/* Product Info */}
                            <div className='flex justify-center text-center my-3'>
                                <div className=" max-w-xs overflow-hidden text-ellipsis px-2">
                                    <p>{accessories.category}</p>
                                    <p className="py-2 truncate ">{accessories.name}</p>
                                    <div className='md:flex justify-center items-center gap- xl:gap-3'>
                                        <p className='font-semibold text-xl line-through text-[#969696]'> Tk {accessories.oldPrice}.00</p>
                                        <p className='font-semibold text-xl text-red-500'> Tk {accessories.price}.00</p>
                                    </div>

                                    {/* Button (Hidden by default, shown on hover) */}
                                    <div className="card-actions justify-center ">
                                        <button
                                            onClick={() => handleAddToCart(accessories)}
                                            className="btn rounded-sm w-auto md:w-[230px]  lg:w-[450px] xl:w-[450px]  2xl:w-[450px] mt-3 text-[19px] xl:text-xl hover:bg-[red] bg-[black] text-white xl:opacity-0 xl:group-hover:opacity-100 xl:transition-opacity  bottom-4 left-1/2  "
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        );
};

export default AccessoriesProducts;