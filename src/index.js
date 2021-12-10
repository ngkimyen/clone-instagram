import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from "./store/LoginProvider";

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
=======
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
<<<<<<< HEAD
    </BrowserRouter>
  </React.StrictMode>,
=======
    </BrowserRouter>,
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
