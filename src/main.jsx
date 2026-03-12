import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TourProvider } from "./context/TourContext";
import "./styles/main.scss";
import "./styles/responsive.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourProvider>
      <App />
    </TourProvider>
  </React.StrictMode>
);