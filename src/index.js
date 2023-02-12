import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Styles/main.css";
import "./Styles/media.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";
import { Provider } from "react-redux";
import store from "./RTK/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
  <RouterProvider router={routes}>
      <App />
  </RouterProvider>
    </Provider>
);
