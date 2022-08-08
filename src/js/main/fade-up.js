import gsap from "gsap";

export const fadeUp = (target) => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: target, start: "top bottom" },
  });

  tl.fromTo(
    target,
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: 1,
      y: 0,
      opacity: 1,
    }
  );
};
