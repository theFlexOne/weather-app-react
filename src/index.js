import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DayNightProvider } from "./context/DayNightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DayNightProvider>
      <App />
    </DayNightProvider>
  </React.StrictMode>
);
