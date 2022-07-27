let d = document;

let conocimientos = [
  { title: "html", img: "./img/conocimientos/html.png" },
  { title: "CSS", img: "./img/conocimientos/css.png" },
  { title: "JavaScript", img: "./img/conocimientos/js.png" },
  { title: "React", img: "./img/conocimientos/react.png" },
  { title: "Git", img: "./img/conocimientos/git.png" },
  { title: "Github", img: "./img/conocimientos/github.png" },
  { title: "Wordpress", img: "./img/conocimientos/wordpress.png" },
];

export default function Conocimientos() {
  let data = null,
    $conocimientosList = d.querySelector("#conocimientos");

  conocimientos.forEach((el) => {
    const itemConocimiento = EachItemDo(el);
    data ? (data += itemConocimiento) : (data = itemConocimiento);
  });

  $conocimientosList.innerHTML = data;
}

function EachItemDo({ title, img }) {
  return `
    <li>
      <img src=${img} alt=${title} title=${title} />
    </li>
`;
}
