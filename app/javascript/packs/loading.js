document.addEventListener("turbolinks:load", function() {
    setTimeout(() => {
      document.querySelector(".js-loading").style.display="none";
      document.querySelector(".site-container").classList.toggle("hide");
      document.querySelector("body").classList.toggle("scroll-lock");
    }, 4000);
});