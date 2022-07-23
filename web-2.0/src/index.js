import ChangingWords from "./ChangingWords.js";
import MenuScroll, { MenuBgAppear } from "./MenuScroll.js";

let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  MenuScroll();
  MenuBgAppear();
  ChangingWords();
});
