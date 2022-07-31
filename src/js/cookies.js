import gsap from "gsap";

let isCookiesAccepted = false;

const cookieButton = document.querySelector(".button-cookie");
const cookieModal = document.querySelector(".cookies");

gsap.fromTo(cookieModal, { y: 450 }, { y: 0, duration: 1 });

const hideCookieModal = () => {
  cookieModal.style.display = "none";
};

cookieButton.addEventListener("click", (e) => {
  gsap.to(cookieModal, { y: 450, onComplete: hideCookieModal, duration: 1 });
  isCookiesAccepted = true;
});
