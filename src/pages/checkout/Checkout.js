import React from "react";
import Subtotal from "../../components/subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left"> 
            
                <div className="checkout__title"> 
                    <h2> Your Shopping Basket </h2> 
                </div>

            </div>


            <div className="checkout__right"> 

                <div> 
                    <Subtotal/>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;