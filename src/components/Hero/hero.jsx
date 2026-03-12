import React from "react";
import "./hero.scss";

const Hero = () => {
  const heroImage = new URL("../../assets/images/hero.jpeg", import.meta.url).href;

  return (
    <section className="hero">

      <img src={heroImage} alt="Travel Hero" className="hero-image" />

      <div className="hero-overlay">
        <div className="hero-content container">
          <h1>Discover Your Next Adventure with GoTravel</h1>

          <form className="search-form">

            <div className="form-group">
              <label>From</label>
              <input type="text" placeholder="Departure City" />
            </div>

            <div className="form-group">
              <label>To</label>
              <input type="text" placeholder="Destination City" />
            </div>

            <div className="form-group">
              <label>From Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>To Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Travelers</label>
              <select>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4 Travelers</option>
                <option>5+ Travelers</option>
              </select>
            </div>

            <button className="search-btn">Search Tours</button>

          </form>
        </div>
      </div>

    </section>
  );
};

export default Hero;