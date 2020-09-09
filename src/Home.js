import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={1}
            title="the lead start"
            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={2}
            title="Thermos Funtainer Food Jar, Frozen, 10 Ounce (Pack of 1"
            image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_.jpg"
            price={9.99}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="RUNMUS Stereo Gaming Headset"
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY355_.jpg"
            price={9.99}
            rating={1}
          />
          <Product
            id={4}
            title="RUNMUS Stereo Gaming Headset"
            image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SX679_.jpg"
            price={9.99}
            rating={2}
          />
          <Product
            id={5}
            title="RUNMUS Stereo Gaming Headset"
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SY355_.jpg"
            price={9.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="RUNMUS Stereo Gaming Headset"
            image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SY450_.jpg"
            price={9.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
