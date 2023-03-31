
const btn = document.querySelector(".btn");
btn.addEventListener('click', getPeople);

function getPeople(e) {
    e.preventDefault();

    const req = new XMLHttpRequest;
    req.open('GET', 'people.json', true);

    req.onload = function() {
        if(this.status === 200) {
            

            const peopleList = JSON.parse(this.responseText);

            let output = "";
            peopleList.forEach(person => {
                output += `
                        ID: ${person.id} <br>
                        Name: ${person.name}<br>
                        Age: ${person.age}<br>
                        Email: ${person.email}<br>
                        <hr>             
                
                `
            });

            document.querySelector('.people').innerHTML = output;
        }
    }

    req.send();
};