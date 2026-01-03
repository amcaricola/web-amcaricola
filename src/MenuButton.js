const d = document;

const MenuButton = () => {
  let $button = d.querySelectorAll("[data-nav-button]"),
    $menu = d.querySelector(".menu");

  d.addEventListener("click", (e) => {
    $button.forEach((element) => {
      if (e.target === element) {
        $button[0].classList.toggle("is-active");
        $menu.classList.toggle("menu-active");
      }
    });

    if (e.target.matches("li a")) {
      $button[0].classList.toggle("is-active");
      $menu.classList.toggle("menu-active");
    }
  });
};

export default MenuButton;
