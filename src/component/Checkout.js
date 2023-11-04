import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="main-checkout">
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://miro.medium.com/v2/resize:fit:2000/0*LliNiHqsQIvP7T24.jpg"
      />
      {basket.length === 0 ? (
        <div>
          <h2>Your Basket is Empty</h2>
          <p>
            Bhai kuch daal lo basket ma khaali rkh kr tumhe kia mil rha ha
            ustaad?,daalney ka tariqa <br /> nh ata to bhai home pr chley jao
            phr wha aadd to cart k button pr daal kr cheez add kerlo
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              console.log(item.title),
              (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  description={item.description}
                />
              )
            );
          })}
        </div>
       
      )}
      
    </div>
    {basket.length > 0 &&(
      <div className="subtotal">
        <SubTotal />
      </div>
    )}
</div>
  );
}

export default Checkout;
