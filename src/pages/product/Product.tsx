import { useParams } from "react-router-dom";
import Container from "../../components/navbar/container/Container";
import image from "../../assets/wat.png";
import Button from "../../components/button/Button";

function Product() {
    const params=useParams();
    return (
        <div>
            <Container>
                <h1 className="mt-5">New Product</h1>
                {/* <div className="grid grid-cols-4 gap-4 mt-4"> */}
                <div className="h-96 shadow mt-4 grid grid-cols-12 ">
               

                    <div className=" col-span-2 p-4">
                <img className="rounded" src={image} alt="" />
                <div>
                   <Button onClick={()=>{ alert("Here")}}>
                    Add to Cart
                    </Button>
                </div>
                </div>
                <div className=" col-span-10 p-4">
                <h1>Title</h1>
                <div className="">
                    <p>Price 25 $</p>
                    <p>Welcome to our online Store</p>
                </div>
                </div>
                
                </div>
                
            </Container>
            {/* <h1>{params.id}</h1> */}
        </div>
    );
}
export default Product;