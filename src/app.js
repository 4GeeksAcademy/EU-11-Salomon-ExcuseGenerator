/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const somebody = ["My dog", "My girlfriend", "A racoon", "My brother"];
  const action = ["distroyed", "stole", "broke", "snatched"];
  const whatever = ["my homework", "the keys", "my motorcycle", "my car"];
  const when = [
    "before the interview",
    "when I was about to go out",
    "during my breakfast",
    "while I was playing videogames"
  ];

  const somebodyExcuse = Math.floor(Math.random() * somebody.length);
  const actionExcuse = Math.floor(Math.random() * action.length);
  const whateverExcuse = Math.floor(Math.random() * whatever.length);
  const whenExcuse = Math.floor(Math.random() * when.length);

  const excuse =
    somebody[somebodyExcuse] +
    " " +
    action[actionExcuse] +
    " " +
    whatever[whateverExcuse] +
    " " +
    when[whenExcuse];
  document.getElementById("stringExcuse").textContent = excuse;
};
