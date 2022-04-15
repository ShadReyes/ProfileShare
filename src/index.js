import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Screens/authorizationScreens/Login.tsx";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<Login />);

// During an update, there is no need to pass the container again
root.render(<Login />);
