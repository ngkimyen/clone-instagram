import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import LoginProvider from "./store/LoginProvider";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
