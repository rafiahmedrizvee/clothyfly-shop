import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("allProducts.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className='w-5/6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-3'>
                {
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        >
                        </Product>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;