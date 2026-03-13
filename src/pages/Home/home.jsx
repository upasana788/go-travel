import React, { useState } from "react";
import TourList from "../../components/TourList/TourList";
import Cart from "../../components/Cart/cart";
import Hero from "../../components/Hero/hero"

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
    <Hero/>
    <div className="tour-list-container">
      <TourList openCart={() => setCartOpen(true)} />
    </div>
      <Cart isOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
};

export default Home;