import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  id,
  title,
  image,
  price,
  rating,
  inStock = false,
  inCheckout = false,
}) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <div className={`product ${inCheckout && "product--checkoutView"}`}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      {!inCheckout &&
        (inStock ? (
          <button className="product__button" onClick={removeFromBasket}>
            Remove from basket
          </button>
        ) : (
          <button className="product__button" onClick={addToBasket}>
            Add to basket
          </button>
        ))}
    </div>
  );
}

export default Product;
