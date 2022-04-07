import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./hooks/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemProvider>
        <App />
      </ItemProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
