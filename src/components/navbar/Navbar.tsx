import React from "react";
import { Link } from "react-router-dom";
import Container from "./container/Container";
function Navbar() {
    // container mx-auto 
    // flex-row-revese for dir right to left menue
    return (
       <div className="h-14 border-b shadow items-center flex" >
        <Container>
      <div className="flex justify-between ">
      <ul className="flex">
                <li className="ml-4"><Link to="/">Home</Link></li>
                <li className="ml-4"><Link to="/store">Shop</Link></li>
                </ul> 
                <div>
                    <button >Purchase </button>
                </div>
      </div>
        </Container>
          
         </div>
    );
    }
    export default Navbar;