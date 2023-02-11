// DOM elements queries

const input = document.getElementById("user-text");
const count = document.querySelector(".count-number");

// listener

input.addEventListener('input', (event) => {
    return countChars(event, count);
});


// logic

function countChars(event, outputElement) {
    event.preventDefault();
    let typedTextLength = event.target.value.length;
    outputElement.innerHTML = typedTextLength;
    
}