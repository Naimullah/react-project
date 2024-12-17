import image from "../../assets/wat.png";
import Button from "../button/Button";

function CartItem()
{
    return(
    <div className="flex mt-4 border-b bp-2">
          <img className="rounded w-28" src={image} alt="" />
          
          <div className="mr-3">
          <h3>Title</h3>
        <div className="mt-2">
        <Button className="mr-2" variant="danger">Remove</Button>
          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
          </div>
    </div>
    )
}
export default CartItem;