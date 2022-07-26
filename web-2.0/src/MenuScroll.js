let d = document;

export default function MenuScroll() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  //   console.log($sections);

  const intercepted = (entries) => {
    // console.log("entries", entries);

    entries.forEach((el) => {
      const id = el.target.getAttribute("id"),
        element = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);

      el.isIntersecting
        ? element.classList.add("link-Active")
        : element.classList.remove("link-Active");
    });
  };

  const observer = new IntersectionObserver(intercepted, {
    threshold: [0.5, 0.75],
  });

  $sections.forEach((el) => observer.observe(el));
}

export function MenuBgAppear() {
  let $nav = d.querySelector("nav");

  if (window.outerWidth < 1024) $nav.style.backgroundColor = "var(--darkblue)";

  addEventListener("resize", (e) => {
    if (window.outerWidth < 1024) {
      $nav.style.backgroundColor = "var(--darkblue)";
    } else {
      $nav.style.backgroundColor = "";
    }
  });

  d.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 100) {
      if ($nav.classList.value == "nav-active") return;
      $nav.classList.add("nav-active");
    } else {
      if ($nav.classList.value != "nav-active") return;
      $nav.classList.remove("nav-active");
    }
  });
}
