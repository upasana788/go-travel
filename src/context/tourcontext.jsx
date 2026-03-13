import React, { createContext, useState, useEffect } from "react";
import {
  getBookings,
  addBooking,
  updateBooking,
  deleteBooking,
} from "../services/bookingservice";

// Create a named context
export const TourContext = createContext();

//Provider component
export const TourProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch bookings on load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        setMessage("Failed to fetch bookings!");
      }
    };
    fetchBookings();
  }, []);

  // Cart operations
  const addToCart = (tour) => setCart([...cart, tour]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  // Book a trip (move from cart to bookings)
  const bookTrip = async (item) => {
    try {
      const booking = await addBooking(item);
      setBookings([...bookings, booking]);
      removeFromCart(item.id);
      setMessage(`Trip to ${item.tourLocation} booked successfully!`);
    } catch {
      setMessage("Failed to book trip!");
    }
  };

  // Edit booking
  const editBooking = async (id, updatedFields) => {
    try {
      const updatedBooking = await updateBooking(id, updatedFields);
      setBookings(bookings.map((b) => (b.id === id ? updatedBooking : b)));
      setMessage("Booking updated successfully!");
    } catch {
      setMessage("Failed to update booking!");
    }
  };

  // Cancel booking
  const cancelBooking = async (id) => {
    try {
      await deleteBooking(id);
      setBookings(bookings.filter((b) => b.id !== id));
      setMessage("Booking canceled!");
    } catch {
      setMessage("Failed to cancel booking!");
    }
  };

  return (
    <TourContext.Provider
      value={{
        cart,
        bookings,
        message,
        addToCart,
        removeFromCart,
        bookTrip,
        editBooking,
        cancelBooking,
        setMessage,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};