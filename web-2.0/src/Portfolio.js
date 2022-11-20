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
    title: "Servicio Tecnico SLM",
    alt: "Servicio-Tecnico-SLM",
    img: "../img/portfolio/slm.jpg",
    link: "https://slm.up.railway.app/",
    year: 2022,
    description:
      "SPA realizada para solventar la necesidad del control y registro del servicio técnico de la empresa Sobre la Mesa, cuenta con API personalizada (HTML - CSS - React) ",
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
      "Diseñada para PYME ArriendaAhora.cl en Chile que trabaja con compra, venta y arriendo, la web se encarga de mostrar el catálogo de inmuebles disponibles (WordPress - CSS)",
  },
];

//   Export de la funcion

export default Portfolio;
