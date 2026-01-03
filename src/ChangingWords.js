let d = document;
export default function ChangingWords() {
  let $words = d.querySelector("#changingWords"),
    word1 = "Web Developer",
    word2 = "Programador Web",
    transfer = $words.textContent,
    disminuir;

  let number = $words.textContent.length,
    wait = 1500;

  setInterval(() => {
    if (number == transfer.length) disminuir = true;

    if (wait != 100) {
      wait -= 100;
      return;
    }

    if (disminuir) {
      number -= 1;
      $words.textContent = transfer.substring(0, number);
      if (number == 0) {
        disminuir = false;
        wait = 400;
        transfer === word1 ? (transfer = word2) : (transfer = word1);
      }
    } else {
      number += 1;
      $words.textContent = transfer.substring(0, number);
      if (number == transfer.length) wait = 2400;
    }
  }, 80);
}
