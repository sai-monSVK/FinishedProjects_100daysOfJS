const coupon = document.querySelector('#coupon-code');
const button = document.querySelector('.btn');


// copy text to clipboard 
// change text of button to copied!

button.addEventListener('click', copyCode);

function copyCode (e) {
  e.preventDefault();
  
  navigator.clipboard.writeText(coupon.value)
  .then(() => {
    button.innerHTML = "Copied!!!";
    setTimeout(() => {
      button.innerHTML = "Copy";
    }, 3000);

  });  
}