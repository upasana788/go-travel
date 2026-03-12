import React from "react";
import "./tourCard.scss";
import { getTourImage } from "../../utils/getTourImage";

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">

      <div className="tour-image-container">
        <img
          src={getTourImage(tour.tourImage)}
          alt={tour.tourName}
        />

        <div className="tour-title">
          {tour.tourName}
        </div>
      </div>

      <div className="tour-details">

        <p className="tour-location">
          {tour.tourLocation}
        </p>

        <div className="tour-meta">
          <span className="tour-fee">${tour.tourFee}</span>
          <span className="tour-duration">{tour.tourDuration}</span>
        </div>

        <button className="book-btn">
          Book Now
        </button>

      </div>

    </div>
  );
};

export default TourCard;