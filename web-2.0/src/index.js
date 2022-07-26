import ChangingWords from "./ChangingWords.js";
import MenuButton from "./MenuButton.js";
import MenuScroll, { MenuBgAppear } from "./MenuScroll.js";

let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  MenuScroll();
  MenuBgAppear();
  ChangingWords();
  MenuButton();
});
