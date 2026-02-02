{/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS (for navbar, modal, dropdown)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
 //<React.StrictMode>
    <App />
 // </React.StrictMode>
);*/}
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ ADD THIS
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
