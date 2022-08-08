import gsap from "gsap";

export const initModal = (openButtons, modal, modalContent, closeButtons) => {
  const deleteBlockFromModal = () => {
    modal.classList.remove("active");
  };

  const body = document.querySelector("body");

  openButtons.forEach((button) =>
    button.addEventListener("click", () => {
      modal.classList.add("active");
      gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.2 });
      body.style["overflowY"] = "hidden";
    })
  );

  if (closeButtons?.length === 0) return;

  closeButtons?.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      gsap.fromTo(
        modal,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.2,
        }
      );
      gsap.fromTo(
        modalContent,
        { y: 0 },
        { y: 20, duration: 0.2, onComplete: deleteBlockFromModal }
      );
      body.style["overflowY"] = "scroll";
    });
  });
};
