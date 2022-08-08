import gsap from "gsap";

export const initModalFromBottom = (
  openButtons,
  modal,
  closeButtons,
  height
) => {
  let windowUp;

  if (window.innerWidth < 1200 && !height) {
    windowUp = "50vh";
  } else if (!height) {
    windowUp = "10vh";
  }

  const hideModal = () => {
    modal.style["display"] = "none";
  };

  const showModal = () => {
    modal.style["display"] = "block";
  };

  closeButtons?.forEach((button) => {
    button.addEventListener("click", () => {
      gsap.to(modal, { top: "105vh", onComplete: hideModal });
      modal.classList.remove("active");
    });
  });

  openButtons?.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modal.classList.contains("active")) {
        gsap.fromTo(modal, { top: "100vh" }, { top: windowUp || height });
        showModal();
        modal.classList.add("active");
      }
    });
  });
};
