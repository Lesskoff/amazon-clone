import React from "react";
import "./Order.css";
import Product from "./Product";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ id, order }) {
  return (
    <div className="order">
      <div className="order__topInfo">
        <div className="order__topInfoLeft">
          <h2>Order</h2>
          <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>
        <div className="order__topInfoLeft">
          <small className="order__id">{id}</small>
        </div>
      </div>
      {order?.basket?.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          inCheckout={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.amount / 100}
        displayType={"text"}
        prefix={"$"}
        thousandsSeparator={true}
      />
    </div>
  );
}

export default Order;
