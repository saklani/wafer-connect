import { baseTheme } from "./base.js";

/** @type {Record<string, string>} */
const light = {
  "--wafer-button-background-color": "rgb(243, 243, 243)",
  "--wafer-button-text-color": "black",
  "--wafer-button-hover-color": "rgba(243, 243, 243, 0.7)",
  "--wafer-button-border": "none",
  "--wafer-secondary-button-background-color": "rgb(255, 255, 255)",
  "--wafer-secondary-button-text-color": "black",
  "--wafer-secondary-button-hover-color": "rgb(252, 252, 252)",
  "--wafer-secondary-button-border": "solid 0.1px rgb(197, 197, 197)",
  "--wafer-error-background-color": "rgb(190, 59, 59)",
  "--wafer-error-hover-color": "rgb(200, 69, 69)",
  "--wafer-error-text-color": "white",
  "--wafer-dialog-background-color": "rgba(243, 243, 243, 0.85)",
  "--wafer-dialog-text-color": "black",
  "--wafer-menu-background-color": "white",
  "--wafer-menu-text-color": "black",
  "--wafer-color-scheme": "light",
  ...baseTheme
};

export { light };
