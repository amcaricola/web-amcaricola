// funcion constructora de los portfolios
import { Portfolio_full as PORTAFOLIO } from "./portafolio_Db.js";

let d = document;

function Portfolio() {
  let data = null,
    $portfolio = d.querySelector("#card-portafolio-folder");

  PORTAFOLIO.forEach((el) => {
    const itemConocimiento = EachItemDo(el);
    data ? (data += itemConocimiento) : (data = itemConocimiento);
  });

  $portfolio.innerHTML = data;
}

function EachItemDo(item) {
  let { title, alt, img, link, year, description, stacks } = item;

  let stackItems = EachStackDo(stacks);

  return `
<a href=${link} class="card-portafolio" target="_blank" rel="noopener">
  <img loading="lazy" src=${img} alt=${alt} />
  <div>
    <div class="card-name-stack">
    <h3 class="card-title"> ${title} <small>(${year})</small></h3>
    <span class="card-stacks-container"> 
      ${stackItems}
    </span>

    </div>
    <p>${description}</p>
  </div>
</a>
  `;
}

function EachStackDo(stacks) {
  if (undefined === stacks || null === stacks) return "";
  let all_stacks = "";
  stacks.forEach((element) => {
    let color = "";
    switch (element) {
      case "HTML":
        color = "#E4552E";
        break;
      case "CSS":
        color = "#6B399C";
        break;
      case "JAVASCRIPT":
        color = "#D7BC39";
        break;
      case "WORDPRESS":
        color = "#28799E";
        break;
      case "WOOCOMMERCE":
        color = "#B16195";
        break;
      case "REACT":
        color = "#1BA1CC";
        break;
      case "GODOT":
        color = "#4D90C1";
        break;
      case "ASTRO":
        color = "#131347";
        break;
    }

    all_stacks += `<span class="card-stack" style="background-color: ${color};"  > ${element} </span> \n`;
  });
  return all_stacks;
}

// base de datos de los portfolios

//   Export de la funcion

export default Portfolio;
