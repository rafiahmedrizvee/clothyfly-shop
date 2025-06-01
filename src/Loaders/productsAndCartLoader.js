import { getStoredProduct } from "../Utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Fetch all products and men products data
    const productData = await fetch("allProducts.json");
    const menProductData = await fetch("menProductsCategory.json");
    const womenProductData = await fetch("WomenProductsCategory.json");
    const childrenProductData = await fetch("childrenProductsCategory.json");
    const accessoriesProductData = await fetch("accessoriesProductsCategory.json");

    // Parse the JSON data
    const products = await productData.json();
    const menProducts = await menProductData.json();
    const womenProducts = await womenProductData.json();
    const childrenProducts = await childrenProductData.json();
    const accessoriesProducts = await accessoriesProductData.json();


    const allProducts = [...products, ...menProducts, ...womenProducts, ...childrenProducts, ...accessoriesProducts];


    const savedCart = getStoredProduct();
    const initialCart = [];


    for (const id in savedCart) {
        const addedProduct = allProducts.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: allProducts, initialCart: initialCart };
}


