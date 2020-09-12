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
        <h2 className="checkout__title">
          Your Basket {!basket?.length && "is empty"}
        </h2>
        {basket?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
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
