import { createContext, useState, useEffect } from "react";
import { getTours } from "../services/tourservice";

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours().then(setTours);
  }, []);

  return (
    <TourContext.Provider value={{ tours, setTours }}>
      {children}
    </TourContext.Provider>
  );
};