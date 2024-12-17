import React from "react";
import Container from "../../components/navbar/container/Container";
import CartItem from "../../components/cartitem/CartItem";
import Button from "../../components/button/Button";
function Cart()
{
    return (
        <div>
      <Container>
       <div className="">
       <CartItem />
       </div>
       <div className="">
        <p>Total Price:200</p>
        <p>Discount :200</p>
        <p>Final Price:200</p>
       </div>
       <Button variant="success">
        Save Reference 
       </Button>
        
      </Container>
        </div>
    )
}
export default Cart;