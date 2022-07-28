const isCookiesAccepted = false;

const cookieButton = document.querySelector(".button-cookie");
const cookieModal = document.querySelector(".cookies");

cookieButton.addEventListener("click", (e) => {
  cookieModal.style.display = "none";
});
