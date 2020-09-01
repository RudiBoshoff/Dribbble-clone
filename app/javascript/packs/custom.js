document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu
  const menuToggle = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("is-active");
  });

  // Toggle dropdown
  const elTrigger = document.querySelector(".dropdown-trigger");
  const elDropdown = document.querySelector(".dropdown");
  elTrigger.addEventListener("click", () => {
    elDropdown.classList.toggle("is-active");
  })
});