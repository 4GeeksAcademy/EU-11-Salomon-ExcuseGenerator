/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let somebody = ["A monkey", "My girlfriend", "A racoon", "My brother"];
  let action = ["distroyed", "stole", "broke", "snatched"];
  let whatever = ["my homework", "the keys", "my motorcycle", "my car"];
  let when = [
    "before the interview",
    "when I was about to go out",
    "during my breakfast",
    "while I was playing videogames"
  ];

  let somebodyExcuse = Math.floor(Math.random() * somebody.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whateverExcuse = Math.floor(Math.random() * whatever.length);
  let whenExcuse = Math.floor(Math.random() * when.length);

  let excuse =
    somebody[somebodyExcuse] +
    " " +
    action[actionExcuse] +
    " " +
    whatever[whateverExcuse] +
    " " +
    when[whenExcuse];
  document.getElementById("stringExcuse").textContent = excuse;
};
