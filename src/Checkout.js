import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Basket</h2>
        {basket?.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            inStock={true}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
