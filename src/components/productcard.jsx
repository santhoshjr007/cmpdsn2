// write product card here
import React from "react";
import ViewProductButton from "./button";
const ProductCard =()=>{
    const productImage= "https://target.scene7.com/is/image/Target/GUEST_b4f3c16c-23cb-4786-9778-2c2a3e13fb9e?wid=488&hei=488&fmt=pjpeg"
    const productName="Whey protein"
    const price="$99.99"
    return(
        <div className="border rounded-lg p-4 shadow-md w-64 bg-white text-center">
            <img  src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md mb-2"/>
            <h2 className="text-lg font-semibold mb-1">{productName}</h2>
            <p className="text-gray-700 mb-3">{price}</p>
            <ViewProductButton />
        </div>
    );
};
export default ProductCard