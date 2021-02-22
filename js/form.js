const formAd = document.querySelector('.ad-form');
const fieldsetsFormAd = formAd.querySelectorAll('fieldset');
const typeHouseSelect = formAd.querySelector('#type');
const priceInput = formAd.querySelector('#price');
const timeIn = formAd.querySelector('#timein');
const timeOut = formAd.querySelector('#timeout');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const deactivateForm = () => {
  formAd.classList.add('ad-form--disabled');

  fieldsetsFormAd.forEach((element) => {
    element.disabled = true;
  });
};

deactivateForm();

const activateForm = () => {
  formAd.classList.remove('ad-form--disabled');
    
  fieldsetsFormAd.forEach((element) => {
    element.disabled = false;
  }); 
};

typeHouseSelect.addEventListener('change', () => {
  const minValue = minPrice[typeHouseSelect.value];
  priceInput.min = minValue;
  priceInput.placeholder = minValue;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {activateForm};