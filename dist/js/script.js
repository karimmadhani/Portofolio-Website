window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");
  let section = document.querySelectorAll("section");
  let navLink = document.querySelectorAll("header nav a");

  //Navbar fixed
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fix");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fix");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }

  //active navbar on scroll
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        links.classList.add("dark:text-white");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.remove("dark:text-white");

        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
hamburger.addEventListener("click", function () {
  //toggle berfungsi untuk menambah jika class belum ada, jika class sudah ada akan dihapus
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Close hamburger in every where
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toogle
const checkbox = document.querySelector("#dark-toogle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

//scroll reveal (animasi tulisan muncul)
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1800,
  delay: 50,
});
ScrollReveal().reveal(".hAtas, h2", { origin: "top" });
ScrollReveal().reveal(".pNaik, .aNaik, .icnNaik, .ftBawah, .fmBawah", {
  origin: "bottom",
});
ScrollReveal().reveal(".ftKiri", { origin: "left" });
