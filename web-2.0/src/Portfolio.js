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

function EachItemDo({ title, alt, img, link, year, description }) {
  return `
  <a href=${link} class="card-portafolio" target="_blank" rel="noopener">
  <img loading="lazy" src=${img} alt=${alt} />
  <div>
    <h3> ${title} <small>(${year})</small></h3>
    <p>${description}</p>
  </div>
</a>
  `;
}

// base de datos de los portfolios

const portfolio = [
  {
    title: "Registro de Datos de Bodega - SLM",
    alt: "Registro-de-bodega-SLM",
    img: "../img/portfolio/slm.jpg",
    link: "https://slm.up.railway.app/",
    year: 2022,
    description:
      "SPA que soluciona la necesidad del control y registro de informacion en procesos de bodega de la empresa SOBRE LA MESA a traves de una API (ReackJS - NodeJS - MERN) ",
  },
  {
    title: "Pokedex App",
    alt: "Pokedex-App",
    img: "../img/portfolio/pokemon.jpg",
    link: "https://amcaricola.com/POKEMON/pokedex.html",
    year: 2022,
    description:
      "Aplicación realizada como práctica de peticiones a API, en este proyecto se realizó la petición a la API de Pokémon para realizar un Pokedex con búsqueda inteligente. (HTML - CSS - JavaScript)",
  },
  {
    title: "ArriendaAhora.cl",
    alt: "ArriendaAhora-cl",
    img: "../img/portfolio/arriendaAhora.png",
    link: "https://arriendaahora.cl/",
    year: 2021,
    description:
      "Portal diseñado para ArriendaAhora.cl dedicado a compra, venta y arriendo de inmuebles, la web se encarga de mostrar el catálogo disponible (WordPress - CSS)",
  },
];

//   Export de la funcion

export default Portfolio;
