// add global variables

const number = document.querySelector(".number");
const button = document.querySelector("button");

const arrayOfColorFunctions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let randomColorString = "#";

// listener

button.addEventListener("click", replaceNum);

// functions

function generateRandNum() {
  return (Math.random() * 1000).toFixed(2);
}

function replaceNum() {
  number.innerHTML = generateRandNum();
  newColorFind();
  number.style.color = randomColorString;
  randomColorString = "#";
  return;
}

function newColorFind() {
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
    }
}

// rand num on load page

replaceNum();
