import ChangingWords from "./ChangingWords.js";
import Conocimientos from "./Conocimientos.Js";
import MenuButton from "./MenuButton.js";
import MenuScroll, { MenuBgAppear } from "./MenuScroll.js";
import Portfolio from "./Portfolio.js";

let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  MenuScroll();
  MenuBgAppear();
  ChangingWords();
  MenuButton();
  Conocimientos();
  Portfolio();
});
