document.addEventListener("turbolinks:load", function() {
    setTimeout(() => {
      document.querySelector(".js-loading").style.display="none";
      document.querySelector(".js-container").classList.remove("hide");
      document.querySelector("body").classList.remove("scroll-lock");
    }, 4000);
});