import React, { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import "./tourCard.scss";

const TourCard = ({ tour, openCart }) => {
  const { addToCart } = useContext(TourContext);

  const handleBookNow = () => {
    // Add tour to cart with default travelers/dates
    addToCart({
      ...tour,
      travelers: 1,
      fromDate: "",
      toDate: "",
    });

    // Open cart sidebar
    if (openCart) openCart();
  };

  return (
    <div className="tour-card">
      <div className="tour-image-container">
        <img src={`/images/${tour.tourImage}`} alt={tour.tourName} />
        <div className="tour-title">{tour.tourName}</div>
      </div>

      <div className="tour-details">
        <p className="tour-location">{tour.tourLocation}</p>
        <p className="tour-description">{tour.tourDescription}</p>
        <div className="tour-meta">
          <span className="tour-fee">${tour.tourFee}</span>
          <span className="tour-duration">{tour.tourDuration}</span>
          <span className="tour-rating">⭐ {tour.tourRating}</span>
        </div>
        <button className="book-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;