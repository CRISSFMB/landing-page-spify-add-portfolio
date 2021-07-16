const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const closebutton = document.querySelector(".nav .close");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  closebutton.classList.toggle("active");
});
closebutton.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});
