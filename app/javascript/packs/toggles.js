document.addEventListener('turbolinks:load', () => {
  // TOGGLE MOBILE MENU
  // variables
  const menuToggle = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  // event listeners
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("is-active");
  });

  //////////////////////////////////////////////////////////////////

  // TOGGLE DROPDOWN
  // variables
  const dropdownToggle = document.querySelector(".dropdown-trigger");
  const dropdownMenu = document.querySelector(".dropdown");

  // event listeners
  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("is-active");
  });

  //////////////////////////////////////////////////////////////////
  const changeImage = document.querySelector(".js-change-image button");
  const imageUpload = document.querySelector(".js-image-upload");
  changeImage.addEventListener("click", (e) => { 
    e.preventDefault();
    imageUpload.classList.toggle("hidden");
    document.querySelector(".js-change-image").classList.toggle("hidden");
    document.querySelector(".thumbnail").classList.toggle("hidden");
  });
});