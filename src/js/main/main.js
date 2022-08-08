import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

import { ScrollToPlugin } from "gsap/all";
import { initModalFromBottom } from "../modal-from-bottom";
import { initModal } from "../modal";
import { onScroll } from "./headerScroll";
import { initGooseAnimation } from "./gooseAnimaton";
import { initSmoothScroll } from "./smoothScroll";
import { initParallax } from "./parallax";
import { fadeUp } from "./fade-up";

gsap.registerPlugin(ScrollToPlugin);

onScroll();
document.addEventListener("scroll", onScroll);

initGooseAnimation();
initSmoothScroll();

const tlDelivery = gsap.timeline({
  scrollTrigger: {
    trigger: ".delivery",
    start: "top 1000px",
  },
});

tlDelivery.fromTo(
  ".delivery",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

const tlContacts = gsap.timeline({
  scrollTrigger: {
    trigger: ".contacts",
    start: "top 500px",
  },
});

tlContacts.fromTo(
  ".contacts",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

// FOOTER

const tlFooter = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 800px",
  },
});

tlFooter.fromTo(
  "footer",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

// parallax

const deliveryParallaxContainer = document.querySelector(".delivery");
const deliveryParallaxTarget = document.querySelector(".delivery-img");

initParallax(deliveryParallaxTarget, deliveryParallaxContainer);

const contactsParallaxContainer = document.querySelector(".contacts");
const contactsParallaxTarget = document.querySelector(".contacts-img");

initParallax(contactsParallaxTarget, contactsParallaxContainer);

const buttonShowMore = document.querySelector(".button-show-more");

fadeUp(buttonShowMore);

AOS.init({
  once: true,
});

const openCardButtons = document.querySelectorAll(".card-modal-open");
const cardModal = document.querySelector(".card-modal");
const cardModalContent = document.querySelector(".card-modal-content");
const cardModalClose = document.querySelectorAll(".card-modal-close");

const clothSizeModalOpen = document.querySelector(".cloth-size-modal-open");

clothSizeModalOpen.addEventListener("click", () => {
  gsap.to(cardModalContent, { opacity: 0, duration: 0.2 });
});

const clothSizeModalClose = document.querySelector(".cloth-size-modal-close");

clothSizeModalClose.addEventListener("click", () => {
  gsap.to(cardModalContent, { opacity: 1, duration: 0.2 });
});

initModal(openCardButtons, cardModal, cardModalContent, cardModalClose);

const cartModal = document.querySelector(".cart-modal");
const cartModalContent = document.querySelector(".cart-modal-content");
const cartModalClose = document.querySelectorAll(".cart-modal-close");
const openCartButtons = document.querySelectorAll(".open-cart");

if (window.innerWidth >= 1200) {
  initModal(openCartButtons, cartModal, cartModalContent, cartModalClose);
} else {
  cartModal.style["backgroundColor"] = "transparent";
  initModalFromBottom(openCartButtons, cartModal, cartModalClose, "4vh");
}
const addGooseToLife = document.querySelector("#add-goose-to-life");

addGooseToLife.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: "#products", offsetY: 114 } });
});
