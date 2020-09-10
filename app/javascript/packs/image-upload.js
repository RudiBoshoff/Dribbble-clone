document.addEventListener("turbolinks:load", function() {
  const fileInput = document.querySelector('.js-file-input');
  const fileName = document.querySelector('.js-file-name');
  const dropZone = document.querySelector('.js-drop-zone');
  
  // upload image and change image preview
  if (fileInput){
    fileInput.addEventListener("change", () => {
      updateFileName(fileInput, fileName);
      updateThumbnail(fileInput);
    });
  }
  
  // upload dropped image and change image preview
  if (fileExists(dropZone)){
    DragAndDropImageUpload(dropZone, fileInput, fileName);
  }
})

// changes the span acting as the label to the name of the uploaded file
function updateFileName(fileInput, fileName){
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  }
}

// changes the preview image when uploading using the file input
function updateThumbnail(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => (document.querySelector('img') ? updateImage(e) : createImage(e));
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

// uploads the image when the image is dragged and dropped on the dropzone
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

// attaches the dragged file to the file input
function populateFileInput(e) {
  e.stopPropagation();
  e.preventDefault();

  const file = (e.currentTarget.files || e.dataTransfer.files)[0]; 

  // files is a FileList of File objects. List some properties.
  if (!file.type.match('image.*')) {
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => (document.querySelector('img') ? updateImage(e) : createImage(e));
  // Read in the image file as a data URL.
  reader.readAsDataURL(file);
}

// updates the preview image
function updateImage(e){
  const thumbnail = document.querySelector('.js-thumbnail');
  thumbnail.innerHTML = "";
  thumbnail.innerHTML = `<span><img class="thumbnail" src="${e.currentTarget.result}"/></span>`;
}

// creates a preview image
function createImage(e){
  const thumbnail = document.querySelector('.js-thumbnail');
  let span = document.createElement('span');
  span.innerHTML = `<img class="thumbnail" src="${e.currentTarget.result}"/>`;
  thumbnail.insertBefore(span, null);
}

// checks if a file has been dragged into the window
function fileExists(dropZone) {
  return window.File && window.FileList && window.FileReader && dropZone;
}




