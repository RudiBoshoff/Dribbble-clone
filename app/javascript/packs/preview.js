// set preview when using upload button
document.addEventListener("turbolinks:load", function() {
    function readURL(input) {
      if (input.files && input.files[0]) {
        
        var reader = new FileReader();
        reader.onload = function(e) {
          // check if the document already has an image preview
          if (document.querySelector('img')){
            // has an image > replace it
            document.querySelector('#thumbnail').innerHTML = "";
            document.querySelector('#thumbnail').innerHTML = `<span><img class="thumb" src="${e.target.result}"/></span>`
          }else {
            // does not have an image > create it
            let span = document.createElement('span');
            span.innerHTML = `<img class="thumb" src="${e.target.result}"/>`;
            document.querySelector('#thumbnail').insertBefore(span, null);
          }
        }
        
        reader.readAsDataURL(input.files[0]); // convert to base64 string
        
        const previewImage = document.querySelector('#preview-image');
        const dropZone = document.querySelector('#drop-zone');
        const newShotForm = document.querySelector('#new-shot');
        
        // if on shot/id/edit hide preview image on drop
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