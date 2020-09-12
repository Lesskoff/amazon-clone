import React from "react";
import "./Header.css";
import { Search, ShoppingBasket } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={"./logo-light.svg"} alt="" className="header__logo" />
      </Link>

      <form className="header__search">
        <input type="text" className="header__searchInput" />
        <button type="submit" className="header__searchSubmit">
          <Search className="header__searchIcon" size="22px" />
        </button>
      </form>

      <div className="header__nav">
        <div className="header__option">
          <div className="header__optionTop">
            Hello {user ? user.email.split("@")[0] : "Guest"}
          </div>
          {user ? (
            <button
              className="header__optionBottom header__optionAuthButton"
              onClick={signOut}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="header__optionBottom header__optionAuthButton"
            >
              Sign In
            </Link>
          )}
        </div>
        <div className="header__option">
          <Link to="/orders" className="header__option header__optionBasket">
            <div className="header__optionTop">Returns</div>
            <div className="header__optionBottom">& Orders</div>
          </Link>
        </div>
        <div className="header__option">
          <div className="header__optionTop">Your</div>
          <div className="header__optionBottom">Prime</div>
        </div>
        <Link to="/checkout" className="header__option header__optionBasket">
          <ShoppingBasket className="header__basketIcon" />
          <div className="header__optionBottom">{basket?.length}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
