// add global variables

const number = document.querySelector(".number");
const button = document.querySelector("button");
const body = document.querySelector("body");

// const arrayOfColorFunctions = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];
let randomColorString = "#";

// listener

button.addEventListener("click", changeColor);

// functions


function changeColor() {
  newColorFind();
  number.innerHTML = randomColorString;
  body.style.backgroundColor = randomColorString;
  randomColorString = "#";
  return;
}

function newColorFind() {
//  first method 
  // for (let x = 0; x < 6; x++) {
  //   let index = Math.floor(Math.random() * 16);
  //   let value = arrayOfColorFunctions[index];
  //   randomColorString += value;
  //   }

  // second method
  color = Number(Math.floor(Math.random()*9999999))
          .toString(16)
          .substring(0, 7);
  randomColorString += color;
  return;
}