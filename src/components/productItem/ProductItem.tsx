import React from "react";
import image from "../../assets/wat.png";
import { Products } from "../../types/server";

type TProductItem=Products
 function ProductItem({title,price,description,image}:TProductItem)
 {
     return (
         <div className="shadow border rounded">
            <img className="rounded-t" src={image} alt="" />

            <div className="flex justify-between px-4 mt-2">
                <h3 className="line-clamp-1 w-10">{title}</h3>
                <span>{price}$</span>
            </div>
            <div className="px-4 mt-2">
                <p className="line-clamp-2">
            {description}</p>
            </div>
         </div>
     );
 }
 export default ProductItem;