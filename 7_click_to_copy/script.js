// DOM queries

const word = document.querySelector("input"),
  button = document.querySelector("button"),
  result = document.querySelector("h1");

// event listeners

button.addEventListener("click", howManyVowels);

/**
 * Output how many vowels in input word or sentence
 * @return display count in h1 element
 */

function howManyVowels(e) {
  let count = word.value.match(/[aeiouAEIOU]/g) ? word.value.match(/[aeiouAEIOU]/g).length : 0;

  result.innerHTML = word.value.toUpperCase() + " have " + count + " vowels";

}