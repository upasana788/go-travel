import React, { useState } from "react";
import TourList from "../../components/TourList/TourList";
import Cart from "../../components/Cart/cart";

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <TourList openCart={() => setCartOpen(true)} />
      <Cart isOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
};

export default Home;