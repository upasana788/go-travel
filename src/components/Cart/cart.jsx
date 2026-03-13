import React, { useContext, useState } from "react";
import { TourContext } from "../../context/TourContext";
import "./cart.scss";

const Cart = ({ isOpen, closeCart }) => {
  const {
    cart,
    bookings,
    addToCart,
    removeFromCart,
    bookTrip,
    editBooking,
    cancelBooking,
    message,
    setMessage,
  } = useContext(TourContext);

  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  if (!isOpen) return null;

  const startEditing = (b) => {
    setEditingId(b.id);
    setEditedData({
      travelers: b.travelers,
      fromDate: b.fromDate || "",
      toDate: b.toDate || "",
    });
  };

  const saveEdit = (id) => {
    editBooking(id, editedData);
    setEditingId(null);
  };

  return (
    <div className="cart-sidebar">
      <button className="close-btn" onClick={closeCart}>×</button>
      <h2>My Cart</h2>

      {cart.length === 0 && <p>No tours in cart</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.tourName}</h3>
          <p>Location: {item.tourLocation}</p>
          <label>
            From Date:
            <input
              type="date"
              value={item.fromDate}
              onChange={(e) => item.fromDate = e.target.value}
            />
          </label>
          <label>
            To Date:
            <input
              type="date"
              value={item.toDate}
              onChange={(e) => item.toDate = e.target.value}
            />
          </label>
          <label>
            Travelers:
            <input
              type="number"
              min="1"
              value={item.travelers}
              onChange={(e) => item.travelers = parseInt(e.target.value)}
            />
          </label>
          <p>Total: ${item.tourFee * item.travelers}</p>
          <button onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
          <button onClick={() => bookTrip(item)}>Book Now</button>
        </div>
      ))}

      <h2>My Bookings</h2>
      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b) => (
        <div key={b.id} className="booking-item">
          <h3>{b.tourName}</h3>
          <p>Location: {b.tourLocation}</p>

          {editingId === b.id ? (
            <div className="edit-fields">
              <label>
                From:
                <input
                  type="date"
                  value={editedData.fromDate}
                  onChange={(e) => setEditedData({ ...editedData, fromDate: e.target.value })}
                />
              </label>
              <label>
                To:
                <input
                  type="date"
                  value={editedData.toDate}
                  onChange={(e) => setEditedData({ ...editedData, toDate: e.target.value })}
                />
              </label>
              <label>
                Travelers:
                <input
                  type="number"
                  min="1"
                  value={editedData.travelers}
                  onChange={(e) =>
                    setEditedData({ ...editedData, travelers: parseInt(e.target.value) })
                  }
                />
              </label>
              <button onClick={() => saveEdit(b.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="booking-info">
              <p>From: {b.fromDate || "N/A"} | To: {b.toDate || "N/A"}</p>
              <p>Travelers: {b.travelers}</p>
              <button onClick={() => startEditing(b)}>Edit</button>
              <button onClick={() => cancelBooking(b.id)}>🗑 Cancel</button>
            </div>
          )}
        </div>
      ))}

      {message && (
        <div className="cart-message">
          {message} <button onClick={() => setMessage("")}>×</button>
        </div>
      )}
    </div>
  );
};

export default Cart;