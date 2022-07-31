import gsap from "gsap";

const buttons = document.querySelectorAll(".button-shake");

buttons.forEach((button) => {
  const tlButton = gsap.timeline();

  button.addEventListener("mouseover", (event) => {
    const element = event.target;

    tlButton
      .to(element, {
        duration: 0.1,
        x: "+=5",
      })
      .to(element, {
        duration: 0.1,
        x: "-=5",
      })
      .to(element, {
        duration: 0.1,
        x: "+=4",
      })
      .to(element, {
        duration: 0.1,
        x: "-=4",
      })
      .to(element, {
        duration: 0.1,
        x: "+=3",
      })
      .to(element, {
        duration: 0.1,
        x: "-=3",
      })
      .to(element, {
        duration: 0.1,
        x: "+=2",
      })
      .to(element, {
        duration: 0.1,
        x: "-=2",
      })
      .to(element, {
        duration: 0.1,
        x: "+=1",
      })
      .to(element, {
        duration: 0.1,
        x: "-=1",
      });
  });
  button.addEventListener("mouseleave", (event) => {
    tlButton.seek(tlButton.duration());
    tlButton.kill();
  });
});
