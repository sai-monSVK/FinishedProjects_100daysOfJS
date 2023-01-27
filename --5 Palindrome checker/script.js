// DOM queries

const word = document.querySelector("input"),
  button = document.querySelector("button"),
  result = document.querySelector("h1");

// event listeners

button.addEventListener("click", checkIfPalindrome);

/**
 * Checks if word is a palindrome
 * @param event e for prevent default action
 * @change result in h1 element
 */

function checkIfPalindrome(e) {
  e.preventDefault();
  let arr = word.value.split("");
  let arr_reversed = [...arr].reverse();
  if (arr.every((val, index) => val === arr_reversed[index])) {
    result.innerHTML = word.value.toUpperCase() + " is a palindrome";
  } else {
    result.innerHTML = word.value.toUpperCase() + " is not a palindrome";
  }
}
