document.addEventListener('turbolinks:load', () => {
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

  
  // set preview when using upload button
	function readURL(input) {
		if (input.files && input.files[0]) {
      
			var reader = new FileReader();
			reader.onload = function(e) {
				let span = document.createElement('span');
				span.innerHTML = `<img class="thumb" src="${e.target.result}"/>`;
				document.querySelector('#thumbnail').insertBefore(span, null);
			}
			
      reader.readAsDataURL(input.files[0]); // convert to base64 string
      
      // if on shot/id/edit hide preview image on drop
      const previewImage = document.querySelector('#preview-image');
      const dropZone = document.querySelector('#drop-zone');
      const newShotForm = document.querySelector('#new-shot');

      if (previewImage) {
        previewImage.style.display = 'none';
      }
      // If on shots/new hide dropzone on drop
      if(newShotForm) {
        dropZone.style.display = 'none';
      }
		}
	}
	
	$("#input-file").change(function() {
		readURL(this);
	});
});