const select = document.querySelector(".select");
const input = document.querySelector("#delivery-select");
const options = document.querySelectorAll(".delivery-method .option");
const optionContainer = document.querySelector(".option-container");

select.onclick = () => {
  optionContainer.classList.toggle("active");
  input.classList.toggle("border-blue");
};

options.forEach((e) => {
  e.addEventListener("click", () => {
    input.value = e.innerText;
    optionContainer.classList.toggle("active");
    input.classList.toggle("border-blue");
    options.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
  });
});
