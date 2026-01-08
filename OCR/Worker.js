import { ShowNotification } from "./ToastifyNotification.js";

const UploadImage = document.getElementById("fileToUpload");
const SelectBtn = document.getElementById("selectBtn");
const CleanBtn = document.getElementById("cleanBtn");
const CopyBtn = document.getElementById("copyBtn1");
const TEXTBLOCK = document.getElementById("h3text");
const Loader = document.getElementById("loaderDiv");

let FULLDATA = "";
let LISTOFIMAGES;

async function RunWorker(file) {
  if (!file) return;
  const worker = await Tesseract.createWorker("eng");
  const ret = await worker.recognize(file);
  await worker.terminate();
  return ret.data.text;
}

function printDOC(param = "hola") {
  TEXTBLOCK.value += param;
}

//UPLOADER
SelectBtn.addEventListener("click", (e) => {
  UploadImage.click();
});

UploadImage.addEventListener("change", async (event) => {
  showloader();
  LISTOFIMAGES = Array.from(event.target.files);
  try {
    let i = 0;
    LISTOFIMAGES.forEach(async (element) => {
      let data = await RunWorker(element);
      FULLDATA += " " + data;
      printDOC(FULLDATA);
      i++;
      if (i == LISTOFIMAGES.length) {
        showloader(false);
        event.target.value = "";
        ShowNotification("Imágenes convertidas.");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//CLEAN
CleanBtn.addEventListener("click", (e) => {
  FULLDATA = "";
  TEXTBLOCK.value = "";
  ShowNotification("Se ha limpiado el texto.");
});

//COPY
CopyBtn.addEventListener("click", async (event) => {
  let textValue = TEXTBLOCK.value.trim();
  if (textValue == "") {
    ShowNotification("Oops! No hay nada que copiar...");
  } else {
    try {
      if (window.isSecureContext) {
        navigator.clipboard.writeText(TEXTBLOCK.value);
      }
    } catch (error) {
      console.log(error);
    }
    ShowNotification("¡Texto copiado!");
  }
});

//Loader Function

function showloader(value = true) {
  if (value) {
    Loader.style.visibility = "visible";
  } else {
    Loader.style.visibility = "hidden";
  }
}
