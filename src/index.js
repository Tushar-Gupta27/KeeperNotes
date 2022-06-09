import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

document.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  // console.log(header.classList);
  header.classList.toggle("scrolled", window.scrollY > 0);
});
