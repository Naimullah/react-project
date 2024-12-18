import React, { useEffect } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/navbar/container/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import { getProduct } from "../../services/api";
import { Products } from "../../types/server";
function Store()
{
    const [products,setProducts]=React.useState<Products[]>([]);
   useEffect(()=>{
    // axios.get('http://localhost:3000/products')
    getProduct().then((data)=>{
        setProducts(data)
        console.log(data)
    }
    )
    },[]);

    return (
        <div>
           <Container>
           <h1 className="mt-5">New Product</h1>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {
                    products.map((product)=>(
                        <Link to={`/product/${product.id}`} key={product.id}>  
                        {/* // <Link to={`/product/${1}`} >   */}
                        <ProductItem {...product} />
                        </Link>
                    ))
                }
             

                {/* <ProductItem /> */}
              
            </div>
           </Container>
        </div>
    );
}
export default Store;