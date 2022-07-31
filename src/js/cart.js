import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    574: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
