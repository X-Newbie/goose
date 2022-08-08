import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const initParallax = (target, container) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 0.1,
      start: "top 1200px",
    },
  });

  timeline.fromTo(
    target,
    {
      yPercent: -10,
    },
    {
      yPercent: 5,
    }
  );
};
