import multiplicar from "./multiplica";

const one = document.querySelector("#numero1");
const two = document.querySelector("#numero2");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#result-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const oneNumber = Number.parseInt(one.value);
  const twoNumber = Number.parseInt(two.value);

  div.innerHTML = "<p>" + multiplicar(oneNumber, twoNumber) + "</p>";
});