const MenuBtn = document.getElementById("menu-toggle");
const CloseBtn = document.getElementById("close-menu");
const NavMenu = document.getElementById("nav-menu");


MenuBtn.addEventListener("click", () => {
  NavMenu.classList.toggle("show");
});

CloseBtn.addEventListener("click", () => {
  NavMenu.classList.remove("show");
});

// SCROLL REVEAL ANIMATION

const scrollReveal = ScrollReveal({
  reset: true,
  duration: 2000,
  origin: "top",
  distance: "30px",
});

scrollReveal.reveal(`.active__card,.num-card,.card__comment,.card__stats,

.how__to-card,.pricing__card, .reveal`);
