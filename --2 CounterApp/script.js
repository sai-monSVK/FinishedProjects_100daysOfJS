const counter = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


buttons.addEventListener('click', buttonAction);

function buttonAction(targetElement) {
      
    if(targetElement.target.classList.contains("add")) {
        counter.innerHTML++;
        counter.style.color = "yellow";
    }
    else if(targetElement.target.classList.contains("reset")) {
        counter.innerHTML = 0;
        counter.style.color = "white";
    }
    else if(targetElement.target.classList.contains("subtract")) {
        counter.innerHTML--;
        counter.style.color = "orangered";
    }
}