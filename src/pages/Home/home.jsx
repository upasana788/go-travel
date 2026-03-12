import React from "react";
import TourList from "../../components/TourList/tourlist";
import Hero from "../../components/Hero/hero";
import "./home.scss";


const Home = () => {
  return (
    <>
      <Hero />

      <main className="container">
  
        <TourList />
      </main>
    </>
  );
};

export default Home;