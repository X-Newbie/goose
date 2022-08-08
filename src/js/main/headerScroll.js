import { HEIGHT_WHEN_NAV_GETS_BACKGROUND } from "../config";

let scrolledHeight;

const navigation = document.querySelector("nav");

export const onScroll = () => {
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
