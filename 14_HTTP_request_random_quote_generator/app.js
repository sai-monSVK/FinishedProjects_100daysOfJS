const btn = document.querySelector(".btn");
const quotesDiv = document.querySelector(".quotes");

btn.addEventListener('click', displayQuotes);

function displayQuotes() {
    const inputedNum = document.getElementById('quote-num').value;
    const resultQuotes = [];
    let resultDiv = "";
    
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        for (let index = 0; index < inputedNum; index++) {
            resultQuotes.push(data[Math.floor(Math.random()*(data.length))]);          
        }
    })
    .then(function() {resultQuotes.forEach(element => {
        resultDiv += `
                     <p>${element.text}</p>
                     <span>${element.author}</span>
                     <br>
                     <hr>
                     `;
    });
    quotesDiv.innerHTML = resultDiv;})
    
}

