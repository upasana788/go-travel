// src/services/tourService.js
const API_URL = "http://localhost:3000/tours";

export const getTours = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch tours");
  return await res.json();
};

export const addTour = async (tour) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tour),
  });
  if (!res.ok) throw new Error("Failed to add tour");
  return await res.json();
};

export const updateTour = async (id, updatedFields) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update tour");
  return await res.json();
};

export const deleteTour = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete tour");
};