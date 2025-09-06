"use strict";

// selectes elements
const btnTheme = document.getElementById("btn--theme");
const body = document.querySelector("body");
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("theme--icon");

btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    logo.src = "./assets/images/logo.png";
    themeIcon.src = "./assets/images/icon-sun.svg";
  } else {
    logo.src = "./assets/images/logo.svg";
    themeIcon.src = "./assets/images/icon-moon.svg";
  }
});
