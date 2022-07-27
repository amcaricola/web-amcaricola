// funcion constructora ---
let d = document;

function Portfolio() {
  let data = null,
    $portfolio = d.querySelector("#card-portafolio-folder");

  portfolio.forEach((el) => {
    const itemConocimiento = EachItemDo(el);
    data ? (data += itemConocimiento) : (data = itemConocimiento);
  });

  $portfolio.innerHTML = data;
}

function EachItemDo({ title, img, year, description }) {
  return `
  <div class="card-portafolio">
  <img src=${img} alt=${title} />
  <div>
    <h3>${title} <small>(${year})</small></h3>
    <p>${description}</p>
  </div>
</div>
  `;
}

// base de datos de los portfolios

const portfolio = [
  {
    img: "./img/portfolio/html.png",
    title: "Servicio Tecnico SLM",
    year: 2022,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis dolore labore architecto atque ex et sed tempore! Aperiam nulla labore, consequatur cumque animi culpa magni. Aliquam laudantium qui magni.",
  },
  {
    img: "./img/portfolio/html.png",
    title: "Pokedex App",
    year: 2022,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis dolore labore architecto atque ex et sed tempore! Aperiam nulla labore, consequatur cumque animi culpa magni. Aliquam laudantium qui magni.",
  },
  {
    img: "./img/portfolio/html.png",
    title: "griznie.cl",
    year: 2021,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis dolore labore architecto atque ex et sed tempore! Aperiam nulla labore, consequatur cumque animi culpa magni. Aliquam laudantium qui magni.",
  },
  {
    img: "./img/portfolio/html.png",
    title: "ArriendaAhora.cl",
    year: 2021,
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis dolore labore architecto atque ex et sed tempore! Aperiam nulla labore, consequatur cumque animi culpa magni. Aliquam laudantium qui magni.",
  },
];

//   Export de la funcion

export default Portfolio;
