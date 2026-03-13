const API_URL = "http://localhost:3000/bookings";

// GET all bookings
export const getBookings = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch bookings");
  return await res.json();
};

// POST new booking
export const addBooking = async (booking) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  if (!res.ok) throw new Error("Failed to add booking");
  return await res.json();
};

// PATCH booking (edit)
export const updateBooking = async (id, updatedFields) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update booking");
  return await res.json();
};

// DELETE booking
export const deleteBooking = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete booking");
};