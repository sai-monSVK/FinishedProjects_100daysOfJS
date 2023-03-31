
const btn = document.querySelector(".btn");
btn.addEventListener('click', getPeople);

function getPeople(e) {
    e.preventDefault();

    fetch('people.json')

        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            let output = "";
            data.forEach(person => {
                output += `
                        ID: ${person.id} <br>
                        Name: ${person.name}<br>
                        Age: ${person.age}<br>
                        Email: ${person.email}<br>
                        <hr>             
                
                `
            })
            document.querySelector('.people').innerHTML = output;
        })
}