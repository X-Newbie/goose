import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const initSmoothScroll = () => {
  const container = document.querySelector("#scroll-container");

  if (window.innerWidth >= 576) {
    function setHeight() {
      const height = container.clientHeight;
      document.body.style.height = height + "px";
      return height;
    }
    ScrollTrigger.addEventListener("refreshInit", setHeight);

    gsap.to(container, {
      y: () => -(setHeight() - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};
