import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Initialiser AOS
AOS.init({
  duration: 1000, // durée animation en ms
  once: true,     // animation qu'une seule fois
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
