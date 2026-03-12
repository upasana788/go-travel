import React, { useContext } from "react";
import "./tourlist.scss";
import TourCard from "../TourCard/tourcard";
import { TourContext } from "../../context/tourcontext";

const TourList = () => {
  const { tours } = useContext(TourContext);

  return (
    <div className="tour-list container">
      {tours.length > 0 ? (
        tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
      ) : (
        <p>No tours available</p>
      )}
    </div>
  );
};

export default TourList;