import React, { useEffect, useState } from "react";
import TourCard from "../TourCard/TourCard";
import "./tourList.scss";

const TourList = ({ openCart }) => {
  const [tours, setTours] = useState([]);

  // Fetch tours from server or data.json
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("http://localhost:3000/tours"); // json-server endpoint
        const data = await res.json();
        setTours(data);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
      }
    };

    fetchTours();
  }, []);

  if (!tours || tours.length === 0) return <p>Loading tours...</p>;

  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} openCart={openCart} />
      ))}
    </div>
  );
};

export default TourList;