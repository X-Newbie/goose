import gsap from "gsap";

export const initModal = (openButtons, modal, modalContent, closeButton) => {
  const deleteBlockFromModal = () => {
    modal.classList.remove("active");
  };

  openButtons.forEach((button) =>
    button.addEventListener("click", () => {
      modal.classList.add("active");
      gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 1 });
      gsap.fromTo(modalContent, { y: 20 }, { y: 0, duration: 0.2 });
    })
  );

  if (!closeButton) return;

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
  });
};
