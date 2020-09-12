import React from "react";
import "./Subtotal.css";
import Currency from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <Currency
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length || 0} item{basket?.length !== 1 && "s"}
              ): <strong>{value}</strong>
            </p>
            {basket?.length > 0 && (
              <small className="subtotal__gift">
                <input type="checkbox" id="gift" />
                <label htmlFor="gift">This order contains a gift</label>
              </small>
            )}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
        thousandsSeparator={true}
      />

      {basket?.length > 0 && (
        <button onClick={() => history.push("/payment")}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
