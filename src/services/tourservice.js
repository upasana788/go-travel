const API_URL = "http://localhost:3000/tours";

export const getTours = () => fetch(API_URL).then(res => res.json());

export const addTour = (tour) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tour),
  }).then(res => res.json());

export const updateTour = (id, tour) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tour),
  }).then(res => res.json());

export const deleteTour = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });