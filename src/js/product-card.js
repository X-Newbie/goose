import Swiper from "swiper/bundle";
import { initModal } from "./modal";
import "swiper/css/bundle";
import { initModalFromBottom } from "./modal-from-bottom";

const mobileSwiper = new Swiper(".swiper-mobile", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const mobileModalSwiper = new Swiper(".swiper-mobile-modal", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const productsThumbsSwiper = new Swiper(".product-thumbs", {
  direction: "vertical",
  slidesPerView: "4",
});

const productsSwiper = new Swiper(".product-img", {
  thumbs: {
    swiper: productsThumbsSwiper,
  },
});

const tabsButtons = document.querySelectorAll(".tab-button");
const reviewTab = document.querySelector(".review");
const specificationsTab = document.querySelector(".specifications");

tabsButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("review-button")) {
      tabsButtons.forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
      reviewTab.classList.add("active");
      specificationsTab.classList.remove("active");
    }
    if (e.target.classList.contains("specifications-button")) {
      tabsButtons.forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
      specificationsTab.classList.add("active");
      reviewTab.classList.remove("active");
    }
  });
});

if (window.innerWidth <= 767) {
  const openButtons = document.querySelectorAll(".swiper-mobile .swiper-slide");
  const productModal = document.querySelector(".zoom-modal");
  const productModalContent = document.querySelector(".zoom-modal-content");
  const closeButton = document.querySelectorAll(".zoom-modal-close");

  initModal(openButtons, productModal, productModalContent, closeButton);
} else {

}

const openClothSizeButton = document.querySelectorAll(".cloth-size-modal-open");
const clothSizeModal = document.querySelector(".cloth-size-modal");
const clothSizeModalClose = document.querySelectorAll(
  ".cloth-size-modal-close"
);

initModalFromBottom(openClothSizeButton, clothSizeModal, clothSizeModalClose);
