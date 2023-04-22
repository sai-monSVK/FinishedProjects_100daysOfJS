const btn = document.querySelector("button");

btn.addEventListener("click", calculateTip);

function calculateTip(e) {
  e.preventDefault();

  const bill = Number(document.getElementById("bill").value);
  const serviceRate = Number(document.getElementById("service-rate").value);

  if (bill) {
    const tip = (bill * serviceRate) / 100;
    const total = bill + tip;

    document.getElementById("tip").innerHTML = `Tip: $${tip}`;
    document.getElementById("total-bill").innerHTML = `Total: $${total}`;
  } else {
    alert("Please enter a bill amount");
  }
}
