document.addEventListener("turbolinks:load", function() {
    
    setTimeout(() => {
      document.querySelector(".js-loading").style.display="none";
      document.querySelector(".js-container").classList.remove("hide");
    }, 4000);
});