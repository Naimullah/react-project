import React from "react";
import image from "../../assets/wat.png";
 function ProductItem()
 {
     return (
         <div className="shadow border rounded">
            <img className="rounded-t" src={image} alt="" />

            <div className="flex justify-between px-4 mt-2">
                <h3>Product Title</h3>
                <span>55$</span>
            </div>
            <div className="px-4 mt-2">
                <p className="line-clamp-2">
            CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. You can use the options to control image resolution ...
            ‎PNG to JPG · ‎PNG to WEBP · ‎PNG to PDF · ‎PNG to ICO</p>
            </div>
         </div>
     );
 }
 export default ProductItem;