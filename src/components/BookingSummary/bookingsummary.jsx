import React, { useState, useContext } from "react";
import { TourContext } from "../../context/TourContext";
import "./bookingSummary.scss";

const BookingSummary = () => {
  const { bookings, editBooking } = useContext(TourContext);
  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = (booking) => {
    setEditId(booking.id);
    setEditedData({
      travelers: booking.travelers,
      fromDate: booking.fromDate || "",
      toDate: booking.toDate || "",
    });
  };

  const handleSaveClick = (id) => {
    editBooking(id, editedData);
    setEditId(null);
  };

  return (
    <div className="booking-summary">
      <h2>My Bookings Summary</h2>
      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b) => (
        <div key={b.id} className="booking-item">
          <h3>{b.tourLocation}</h3>

          {editId === b.id ? (
            <div className="edit-fields">
              <label>
                From Date:
                <input
                  type="date"
                  value={editedData.fromDate}
                  onChange={(e) =>
                    setEditedData({ ...editedData, fromDate: e.target.value })
                  }
                />
              </label>
              <label>
                To Date:
                <input
                  type="date"
                  value={editedData.toDate}
                  onChange={(e) =>
                    setEditedData({ ...editedData, toDate: e.target.value })
                  }
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
              <button onClick={() => handleSaveClick(b.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="booking-info">
              <p>
                Travelers: <strong>{b.travelers}</strong>
              </p>
              <p>
                From: {b.fromDate || "N/A"} | To: {b.toDate || "N/A"}
              </p>
              <button onClick={() => handleEditClick(b)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingSummary;