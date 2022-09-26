let input = document.querySelector("#binary");
let output = document.querySelector(".result");
let button = document.querySelector(".btn");
let form = document.querySelector("form")

// Using Button

button.addEventListener("click", function B2D(event) {
  event.preventDefault();
  output.innerText = "Decimal Number : " + parseInt(input.value, 2);
});


// Using Form 

form.addEventListener("submit", event => {
    event.preventDefault();
    output.innerHTML = "decimal Number : " + parseInt(input.value, 2);
});


// Both are working fine