import gsap from "gsap";
import {
  MOBILE_WIDTH,
  MOVE_GOOSE_TIME_DOWN,
  MOVE_GOOSE_TIME_UP,
  MOVE_GOOSE_X,
  MOVE_GOOSE_X_MOBILE,
  MOVE_GOOSE_Y,
  MOVE_GOOSE_Y_MOBILE,
} from "../config";

export const initGooseAnimation = () => {
  const tlGooseEyes = gsap.timeline({
    repeat: -1,
    repeatDelay: 4,
  });

  const tlGoosePaws = gsap.timeline({
    repeat: -1,
    delay: 0.1,
  });

  const tlHouses = gsap.timeline({
    onComplete: () => {
      tlGooseEyes
        .to(".goose-eye", {
          x: "+0.2vw",
          duration: 0.1,
        })
        .to(".goose-eye", {
          x: "-0.2vw",
          duration: 0.1,
          delay: 4,
        });

      tlGoosePaws
        .to(".goose-paw-2", {
          rotate: 15,
          duration: 0.45,
        })
        .to(".goose-paw-2", {
          rotate: 0,
          duration: 0.5,
          delay: 0.07,
        })
        .to(".goose-paw-1", {
          rotate: -12,
          duration: 0.45,
          delay: 0.07,
        })
        .to(".goose-paw-1", {
          rotate: 0,
          duration: 0.5,
          delay: 0.45,
        });
    },
  });

  tlHouses
    .fromTo(".house1", { y: 500 }, { y: 0, duration: 0.2, delay: 0.2 })
    .fromTo(".house2", { y: 500 }, { y: 0, duration: 0.26, delay: 0.26 })
    .fromTo(".house3", { y: 500 }, { y: 0, duration: 0.3, delay: 0.23 }, "<")
    .fromTo(".house4", { y: 500 }, { y: 0, duration: 0.26, delay: 0.033 })
    .to(".goose-md", {
      duration: MOVE_GOOSE_TIME_UP,
      marginLeft: `-=${MOVE_GOOSE_X[1]}`,
      y: `-=${MOVE_GOOSE_Y}`,
    })
    .to(".goose-md", {
      duration: MOVE_GOOSE_TIME_DOWN,
      marginLeft: `-=${MOVE_GOOSE_X[1]}`,
      y: `+=${MOVE_GOOSE_Y}`,
    })
    .add("firstStep")
    .to(
      ".goose-md",
      {
        duration: MOVE_GOOSE_TIME_UP,
        marginLeft: `-=${MOVE_GOOSE_X[2]}`,
        y: `-=${MOVE_GOOSE_Y}`,
      },
      "firstStep"
    )
    .to(
      ".goose-md",
      {
        duration: MOVE_GOOSE_TIME_DOWN,
        marginLeft: `-=${MOVE_GOOSE_X[2]}`,
        y: `+=${MOVE_GOOSE_Y}`,
      },
      "firstStep<"
    )
    .to(
      ".house2",
      {
        y: -25,
        duration: 0.5,
      },
      "firstStep"
    )
    .to(
      ".house1",
      {
        y: -25,
        duration: 0.165,
      },
      "firstStep"
    )
    .to(
      ".house2",
      {
        y: 0,
        duration: 0.8,
        ease: "bounce.out",
        delay: 0.2,
      },
      "firstStep"
    )
    .to(
      ".house1",
      {
        y: 0,
        duration: 0.8,
        ease: "bounce.out",
        delay: 0.2,
      },
      "firstStep"
    )
    .add("secondStep")
    .to(
      ".goose-md",
      {
        duration: MOVE_GOOSE_TIME_UP,
        marginLeft: `-=${MOVE_GOOSE_X[3]}`,
        y: `-=${MOVE_GOOSE_Y}`,
      },
      "secondStep"
    )
    .to(
      ".goose-md",
      {
        duration: MOVE_GOOSE_TIME_DOWN,
        marginLeft: `-=${MOVE_GOOSE_X[3]}`,
        y: `-50`,
      },
      "secondStep<"
    )
    .to(
      ".house4",
      {
        y: 25,
        duration: 0.1,
      },
      "secondStep"
    )
    .to(
      ".house4",
      {
        y: 0,
        duration: 0.8,
        ease: "bounce.out",
        delay: 0.2,
      },
      "secondStep"
    )
    .to(
      ".house2",
      {
        y: -25,
        duration: 0.265,
      },
      "secondStep"
    )
    .to(
      ".house2",
      {
        y: 0,
        duration: 0.5,
        ease: "bounce.out",
        delay: 0.2,
      },
      "secondStep"
    )
    .to(
      ".house3",
      {
        y: -25,
        duration: 0.265,
      },
      "-=0.2"
    )
    .to(".house3", {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });

  // MOBILE

  if (window.innerWidth < MOBILE_WIDTH) {
    gsap.set(".header-text > *", { y: 20 });
    const tlGoose = gsap.timeline();

    const tlHomes = gsap.timeline({
      onComplete: () => {
        tlGoose
          .to(".goose", {
            duration: 0.1,
            marginLeft: `-=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `-=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `-=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `-=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `+=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
            delay: 1,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `+=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `+=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".goose", {
            duration: 0.1,
            marginLeft: `+=${MOVE_GOOSE_X_MOBILE}`,
            y: `+=${MOVE_GOOSE_Y_MOBILE}`,
          })
          .to(".header-text > h1", { y: 0, opacity: 1 })
          .to(".header-text > h5", { y: 0, opacity: 1 })
          .to(".header-text > button", { y: 0, opacity: 1 });
      },
    });

    tlHomes.fromTo(
      ".house-mobile-img",
      { y: 500 },
      { y: 0, duration: 0.2, delay: 0.2 }
    );
  }
};