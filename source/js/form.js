import {isEscEvent, isClickEvent} from './util.js';
import {sendData} from './api.js';
import {mainMarker, CENTER_LAT, CENTER_LNG} from './map.js';
import {clearAvatar, clearPhoto} from './photo.js'

const MIN_LENGHT_TITLE = 30;
const MAX_LENGHT_TITLE = 100;
const MAX_PRICE = 1000000;
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const mapFilters = document.querySelector('.map__filters');
const formAd = document.querySelector('.ad-form');
const titleAd = formAd.querySelector('#title');
const typeHouseSelect = formAd.querySelector('#type');
const priceInput = formAd.querySelector('#price');
const roomNumber = formAd.querySelector('#room_number');
const capacity = formAd.querySelector('#capacity');
const timeIn = formAd.querySelector('#timein');
const timeOut = formAd.querySelector('#timeout');
const resetButton = formAd.querySelector('.ad-form__reset');
const addressForm = formAd.querySelector('#address'); 
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

titleAd.addEventListener('invalid', () => {
  if (titleAd.validity.valueMissing) {
    titleAd.setCustomValidity('Обязательное поле')
  } else {
    titleAd.setCustomValidity('');
  }
});

titleAd.addEventListener('input', () => {
  const valueLength = titleAd.value.length;
  if (valueLength < MIN_LENGHT_TITLE) {
    titleAd.setCustomValidity('Еще '+ (MIN_LENGHT_TITLE - valueLength) +' симв.');
  } else if (valueLength > MAX_LENGHT_TITLE) {
    titleAd.setCustomValidity('Удалите лишние ' + (valueLength - MAX_LENGHT_TITLE) +' симв.');
  } else {
    titleAd.setCustomValidity('');
  }

  titleAd.reportValidity();
});

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;
  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity('Цена не может быть больше миллиона');
  } else {
    priceInput.setCustomValidity('');
  }
});

typeHouseSelect.addEventListener('change', () => {
  const minValue = minPrice[typeHouseSelect.value];
  priceInput.min = minValue;
  priceInput.placeholder = minValue;
});

const checkPlace = () => {
  if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber.value !== '100' && capacity.value === '0') {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
  }
};

capacity.addEventListener('change', () => {
  checkPlace();
});

roomNumber.addEventListener('change', () => {
  checkPlace();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const resetFormAd = () => {
  formAd.reset();
  mapFilters.reset();
  mainMarker.setLatLng({lat: CENTER_LAT, lng: CENTER_LNG});
  addressForm.value = `${CENTER_LAT}, ${CENTER_LNG}`;
  clearAvatar();
  clearPhoto(); 
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFormAd();
});

const closeMessage = (evt) => {
  if (isEscEvent(evt) || isClickEvent(evt)) {
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', closeMessage);
    document.removeEventListener('mousedown', closeMessage);
  }
};

const showSuccessMessage = () => {
  main.append(successMessage);
  resetFormAd();
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
};

const showErrorMessage = () => {
  main.append(errorMessage);
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
}

const setFormSubmit = () => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => showSuccessMessage(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

export {setFormSubmit};