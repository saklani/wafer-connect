import { baseTheme } from "./base.js";

const dark = {
  "--wafer-button-background-color": "rgba(25, 25, 25, 0.9)",
  "--wafer-button-text-color": "white",
  "--wafer-button-hover-color": "rgb(25, 25, 25)",
  "--wafer-button-border": "none",
  "--wafer-secondary-button-background-color": "rgb(30, 30, 30)",
  "--wafer-secondary-button-text-color": "white",
  "--wafer-secondary-button-hover-color": "black",
  "--wafer-secondary-button-border": "solid 0.1px rgb(150, 150, 150)",
  "--wafer-error-background-color": "rgb(220, 66, 66)",
  "--wafer-error-hover-color": "rgb(200, 69, 69)",
  "--wafer-error-text-color": "white",
  "--wafer-dialog-background-color": "rgba(50, 50, 50, 0.85)",
  "--wafer-dialog-text-color": "white",
  "--wafer-menu-background-color": "black",
  "--wafer-menu-text-color": "white",
  "--wafer-color-scheme": "dark",
  ...baseTheme,
};

export { dark };
