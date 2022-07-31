import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

import {
  HEIGHT_WHEN_NAV_GETS_BACKGROUND,
  MOBILE_WIDTH,
  MOVE_GOOSE_TIME_DOWN,
  MOVE_GOOSE_TIME_UP,
  MOVE_GOOSE_X,
  MOVE_GOOSE_X_MOBILE,
  MOVE_GOOSE_Y,
  MOVE_GOOSE_Y_MOBILE,
} from "./config";
import { initModal } from "./modal";

let scrolledHeight;

const navigation = document.querySelector("nav");

const onScroll = () => {
  scrolledHeight = window.pageYOffset || document.documentElement.scrollTop;

  if (HEIGHT_WHEN_NAV_GETS_BACKGROUND <= scrolledHeight) {
    navigation.classList.add("navigation_bg");
  }

  if (navigation.style) {
    if (HEIGHT_WHEN_NAV_GETS_BACKGROUND >= scrolledHeight) {
      navigation.classList.remove("navigation_bg");
    }
  }
};

onScroll();

document.addEventListener("scroll", onScroll);

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

gsap.registerPlugin(ScrollTrigger);

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

const tlDelivery = gsap.timeline({
  scrollTrigger: {
    trigger: ".delivery",
    start: "top 1000px",
  },
});

tlDelivery.fromTo(
  ".delivery",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

const tlContacts = gsap.timeline({
  scrollTrigger: {
    trigger: ".contacts",
    start: "top 500px",
  },
});

tlContacts.fromTo(
  ".contacts",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

// FOOTER

const tlFooter = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 500px",
  },
});

tlFooter.fromTo(
  "footer",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
  }
);

// parallax

const tlDeliveryImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".delivery",
    scrub: 0.1,
    start: "top 1200px",
  },
});

tlDeliveryImg.fromTo(
  ".delivery-img",
  {
    yPercent: -10,
  },
  {
    yPercent: 5,
  }
);

const tlContactsImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".contacts",
    scrub: true,
    start: "top 1200px",
  },
});

tlContactsImg.fromTo(
  ".contacts-img",
  {
    yPercent: -10,
  },
  {
    yPercent: 5,
  }
);

const tlButtonShowMore = gsap.timeline({
  scrollTrigger: { trigger: ".button-show-more", start: "top bottom" },
});

tlButtonShowMore.fromTo(
  ".button-show-more",
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

AOS.init({
  once: true,
});

const buyButtons = document.querySelectorAll(".button-buy");
const cartModal = document.querySelector(".cart-modal");
const cartModalContent = document.querySelector(".cart-modal-content");
const modalClose = document.querySelector(".modal-close");

initModal(buyButtons, cartModal, cartModalContent, modalClose);

const addGooseToLife = document.querySelector("#add-goose-to-life");

addGooseToLife.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: "#products", offsetY: 114 } });
});
