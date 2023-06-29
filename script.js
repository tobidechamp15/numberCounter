const sub = document.querySelector("#minus");
const plus = document.querySelector("#add")

sub.addEventListener("click", reduceNumber)

function reduceNumber() {
  // Get the current number value from the HTML element
  let number = parseInt(document.getElementById("numberDisplay").textContent);

  // Reduce the number by 1
  number--;

  // Update the HTML element with the new number value
  document.getElementById("numberDisplay").textContent = number;
}

plus.addEventListener("click", increaseNumber);

function increaseNumber() {
  // Get the current number value from the HTML element
  let number = parseInt(document.getElementById("numberDisplay").textContent);

  // Reduce the number by 1
  number++;

  // Update the HTML element with the new number value
  document.getElementById("numberDisplay").textContent = number;
}