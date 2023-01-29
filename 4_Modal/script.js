// vars

const button = document.querySelector("#btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

// listeners

button.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
modal.addEventListener('click', toggleModal);


function toggleModal(event) {
  event.preventDefault();
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modalContent.classList.add("slide-up");
    setTimeout( ()=> {
      modal.style.display = "none";
      modalContent.classList.remove("slide-up");
    }, 500);
    

  }
  return;
}


