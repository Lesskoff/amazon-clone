/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <button className="footer__backToTop" onClick={toTop}>
        Back to top
      </button>

      <div className="footer__warning">
        Attention! This site is for demostration only. Please do not make
        purchases or enter your real details.
      </div>

      <div class="navFooterVerticalRow ">
        <div class="navFooterLinkCol ">
          <div class="navFooterColHead">Get to Know Us</div>
          <ul>
            <li class="nav_first">
              <a class="nav_a">Careers</a>
            </li>
            <li>
              <a class="nav_a">Blog</a>
            </li>
            <li>
              <a class="nav_a">About Amazon</a>
            </li>
            <li>
              <a class="nav_a">Sustainability</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a class="nav_a">Amazon Devices</a>
            </li>
            <li class="nav_last">
              <a class="nav_a">Amazon Tours</a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol ">
          <div class="navFooterColHead">Make Money with Us</div>
          <ul>
            <li class="nav_first">
              <a class="nav_a">Sell on Amazon</a>
            </li>
            <li>
              <a class="nav_a">Sell on Amazon Business</a>
            </li>
            <li>
              <a class="nav_a">Sell Your Apps on Amazon</a>
            </li>
            <li>
              <a class="nav_a">Become an Affiliate</a>
            </li>
            <li>
              <a class="nav_a">Advertise Your Products</a>
            </li>
            <li>
              <a class="nav_a">Self-Publish with Us</a>
            </li>
            <li>
              <a class="nav_a">Host an Amazon Hub</a>
            </li>
            <li class="nav_last nav_a_carat">
              <span class="nav_a_carat">›</span>
              <a class="nav_a">See More Make Money with Us</a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol ">
          <div class="navFooterColHead">Amazon Payment Products</div>
          <ul>
            <li class="nav_first">
              <a class="nav_a">Amazon Business Card</a>
            </li>
            <li>
              <a class="nav_a">Shop with Points</a>
            </li>
            <li>
              <a class="nav_a">Reload Your Balance</a>
            </li>
            <li class="nav_last">
              <a class="nav_a">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol ">
          <div class="navFooterColHead">Let Us Help You</div>
          <ul>
            <li class="nav_first">
              <a class="nav_a">Amazon and COVID-19</a>
            </li>
            <li>
              <a class="nav_a">Your Account</a>
            </li>
            <li>
              <a class="nav_a">Your Orders</a>
            </li>
            <li>
              <a class="nav_a">Shipping Rates &amp; Policies</a>
            </li>
            <li>
              <a class="nav_a">Returns &amp; Replacements</a>
            </li>
            <li>
              <a class="nav_a">Manage Your Content and Devices</a>
            </li>
            <li>
              <a class="nav_a">Amazon Assistant</a>
            </li>
            <li class="nav_last">
              <a class="nav_a">Help</a>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/" className="footer__logo">
        <img src={"./logo-light.svg"} alt="" className="header__logo" />
      </Link>

      <div class="footer__copyrightContainer">
        <ul>
          <li class="nav_first">
            <a class="nav_a">Conditions of Use</a>
          </li>
          <li>
            <a class="nav_a">Privacy Notice</a>
          </li>
          <li>
            <a class="nav_a">Interest-Based Ads</a>
          </li>
        </ul>
        <div class="footer__copyright">
          © 2020-2020, Amazon-Clone, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
}

export default Footer;
