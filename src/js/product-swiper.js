import Swiper from "swiper";
import "swiper/css/bundle";
import { Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
});
