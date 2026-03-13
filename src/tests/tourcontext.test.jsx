import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TourProvider, TourContext } from "../context/TourContext";

vi.mock("../services/bookingservice", () => ({
  getBookings: vi.fn(() => Promise.resolve([])),
  addBooking: vi.fn((item) =>
    Promise.resolve({ ...item, id: Math.floor(Math.random() * 1000) })
  ),
  updateBooking: vi.fn((id, updatedFields) =>
    Promise.resolve({ id, ...updatedFields })
  ),
  deleteBooking: vi.fn(() => Promise.resolve()),
}));

describe("TourContext CRUD Operations", () => {
  const wrapper = ({ children }) => <TourProvider>{children}</TourProvider>;

  it("adds an item to the cart", () => {
    const { result } = renderHook(() => React.useContext(TourContext), { wrapper });
    act(() => result.current.addToCart({ id: 1, tourName: "Test Tour" }));
    expect(result.current.cart.length).toBe(1);
  });

  it("removes an item from the cart", () => {
    const { result } = renderHook(() => React.useContext(TourContext), { wrapper });
    act(() => result.current.addToCart({ id: 2, tourName: "Remove Tour" }));
    act(() => result.current.removeFromCart(2));
    expect(result.current.cart.length).toBe(0);
  });

  it("books a trip", async () => {
    const { result } = renderHook(() => React.useContext(TourContext), { wrapper });
    act(() => result.current.addToCart({ id: 3, tourName: "Book Tour", tourLocation: "Test Land" }));
    await act(async () => result.current.bookTrip(result.current.cart[0]));
    expect(result.current.cart.length).toBe(0);
    expect(result.current.bookings.length).toBe(1);
  });

  it("edits a booking", async () => {
    const { result } = renderHook(() => React.useContext(TourContext), { wrapper });

    // Setup: book a trip first
    act(() => result.current.addToCart({ id: 4, tourName: "Edit Tour", tourLocation: "Test Land" }));
    await act(async () => result.current.bookTrip(result.current.cart[0]));

    await act(async () => result.current.editBooking(result.current.bookings[0].id, { tourName: "Updated Tour" }));
    expect(result.current.bookings[0].tourName).toBe("Updated Tour");
  });

  it("cancels a booking", async () => {
    const { result } = renderHook(() => React.useContext(TourContext), { wrapper });

    // Setup: book a trip first
    act(() => result.current.addToCart({ id: 5, tourName: "Cancel Tour", tourLocation: "Test Land" }));
    await act(async () => result.current.bookTrip(result.current.cart[0]));

    await act(async () => result.current.cancelBooking(result.current.bookings[0].id));
    expect(result.current.bookings.length).toBe(0);
  });
});