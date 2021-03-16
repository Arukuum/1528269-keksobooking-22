const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');

const onFileUpload = ((fileChooser, preview) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

avatarChooser.addEventListener('change', () => {
  onFileUpload(avatarChooser, avatarPreview)
});

const clearAvatar = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
};

const clearPhoto = () => {
  if (photoPreview.firstChild) {
    photoPreview.removeChild(photoPreview.firstChild);
  }
};  

photoChooser.addEventListener('change', () => { 
  const photoContainer = document.createElement('img');
  photoContainer.style.width = '100%';
  photoContainer.style.height = '100%';
  
  onFileUpload(photoChooser, photoContainer);
  clearPhoto();
  photoPreview.append(photoContainer);
});
  
export {clearAvatar, clearPhoto}; 