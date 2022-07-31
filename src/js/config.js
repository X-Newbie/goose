export const HEIGHT_WHEN_NAV_GETS_BACKGROUND = 100; //in pixels
export const MOBILE_WIDTH = 768; //in pixels
export const MOVE_GOOSE_Y_MOBILE = "0vh";
export const MOVE_GOOSE_X_MOBILE = "22.5vw";
export const MOVE_GOOSE_TIME_UP = 0.5;
export const MOVE_GOOSE_TIME_DOWN = 0.4;
export const MOVE_GOOSE_Y = "90";
export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 1200,
  xl: 1440,
  "2xl": 1600,
  "3xl": 1920,
};

let MOVE_GOOSE_X;

if (window.innerWidth > BREAKPOINTS.xl) {
  MOVE_GOOSE_X = {
    1: "3.4vw",
    2: "13vw",
    3: "8.5vw",
  };
} else if (window.innerWidth <= BREAKPOINTS.xl) {
  MOVE_GOOSE_X = {
    1: "3.2vw",
    2: "12vw",
    3: "8vw",
  };
} else if (window.innerWidth <= BREAKPOINTS.lg) {
  MOVE_GOOSE_X = {
    1: "3vw",
    2: "11vw",
    3: "7vw",
  };
}

export { MOVE_GOOSE_X };
