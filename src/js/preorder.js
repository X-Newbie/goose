import gsap from "gsap";
import { initModal } from "./modal";

const deliverySelect = document.querySelector(".delivery.select");
const deliveryInput = document.querySelector("#delivery-select");
const deliveryOptions = document.querySelectorAll(".delivery.option");
const deliveryOptionContainer = document.querySelector(
  ".delivery.option-container"
);
const citySelect = document.querySelector(".city.select");
const cityInput = document.querySelector("#city-select");
const cityOptions = document.querySelectorAll(".city.option");
const cityOptionContainer = document.querySelector(".city.option-container");

const initCustomSelector = (select, input, options, optionsContainer) => {
  select.onclick = () => {
    optionsContainer.classList.toggle("active");
    input.classList.toggle("border-blue");
  };

  options.forEach((e) => {
    e.addEventListener("click", () => {
      input.value = e.innerText;
      optionsContainer.classList.toggle("active");
      input.classList.toggle("border-blue");
      options.forEach((e) => {
        e.classList.remove("selected");
      });
      e.classList.add("selected");
    });
  });
};

initCustomSelector(
  deliverySelect,
  deliveryInput,
  deliveryOptions,
  deliveryOptionContainer
);
initCustomSelector(citySelect, cityInput, cityOptions, cityOptionContainer);

const openModalButtons = document.querySelectorAll(".button-buy");
const thanksModal = document.querySelector(".thanks-modal");
const thanksModalContent = document.querySelector(".thanks-modal-content");

initModal(openModalButtons, thanksModal, thanksModalContent);

const gooseOnSkateTl = gsap.timeline({
  repeat: -1,
});

const gooseOnSkate = document.querySelector(".goose-on-skate");

gooseOnSkateTl
  .to(gooseOnSkate, { y: -10, duration: 1 })
  .to(gooseOnSkate, { y: 0, duration: 1 })
  .to(gooseOnSkate, { rotate: -5, duration: 0.5 })
  .to(gooseOnSkate, { rotate: 0, duration: 0.5 });
