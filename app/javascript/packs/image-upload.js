document.addEventListener("turbolinks:load", function() {
  const fileInput = document.querySelector('.js-file-input');
  const fileName = document.querySelector('.js-file-name');
  const dropZone = document.querySelector('.js-drop-zone');
  
  if (fileInput){
    fileInput.addEventListener("change", () => {
      updateFileName(fileInput, fileName);
      updateThumbnail(fileInput);
    });
  }
  
  if (fileExists(dropZone)){
    DragAndDropImageUpload(dropZone, fileInput, fileName);
  }
})

function updateFileName(fileInput, fileName){
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  }
}

function updateThumbnail(input) {
  if (input.files && input.files[0]) {
    
    const reader = new FileReader();
    reader.onload = function(e) {
      // check if the document already has an image preview
      if (document.querySelector('img')){
        // has an image > replace it
        document.querySelector('.js-thumbnail').innerHTML = "";
        document.querySelector('.js-thumbnail').innerHTML = `<span><img class="thumb" src="${e.target.result}"/></span>`
      }else {
        // does not have an image > create it
        let span = document.createElement('span');
        span.innerHTML = `<img class="thumb" src="${e.target.result}"/>`;
        document.querySelector('.js-thumbnail').insertBefore(span, null);
      }
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

function DragAndDropImageUpload(dropZone, fileInput, fileName) {
  dropZone.addEventListener('dragover', (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }, false);

  dropZone.addEventListener('drop',populateFileInput);

  // Drop zone classes itself
  dropZone.addEventListener('dragover', () => dropZone.classList.add('fire'), false);

  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('fire'), false);

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('fire');
    fileInput.files = e.dataTransfer.files;
    fileName.textContent = fileInput.files[0].name;
  }, false);

  // Body specific 
  document.documentElement.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragging');
  }, false);

  // removes dragging class to body WHEN NOT dragging
  document.documentElement.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragging', 'fire');
  }, false);
}

function populateFileInput(e) {
  e.stopPropagation();
  e.preventDefault();

  const file = (e.currentTarget.files || e.dataTransfer.files)[0]; 

  // files is a FileList of File objects. List some properties.
  if (!file.type.match('image.*')) {
    return;
  }
  
  const reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (e) => (document.querySelector('img') ? updateImage(e) : createImage(e));

  // Read in the image file as a data URL.
  reader.readAsDataURL(file);
}

function updateImage(e){
	const thumbnail = document.querySelector('.js-thumbnail');
  thumbnail.innerHTML = "";
  thumbnail.innerHTML = `<span><img class="thumbnail" src="${e.currentTarget.result}"/></span>`;
}

function createImage(e){
	const thumbnail = document.querySelector('.js-thumbnail');
  let span = document.createElement('span');
  span.innerHTML = `<img class="thumbnail" src="${e.currentTarget.result}"/>`;
  thumbnail.insertBefore(span, null);
}

function fileExists(dropZone) {
  return window.File && window.FileList && window.FileReader && dropZone;
}




