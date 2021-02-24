const MIN_LENGHT_TITLE = 30;
const MAX_LENGHT_TITLE = 100;
const MAX_PRICE = 1000000;
const formAd = document.querySelector('.ad-form');
const fieldsetsFormAd = formAd.querySelectorAll('fieldset');
const titleAd = formAd.querySelector('#title');
const typeHouseSelect = formAd.querySelector('#type');
const priceInput = formAd.querySelector('#price');
const roomNumber = formAd.querySelector('#room_number');
const capacity = formAd.querySelector('#capacity');
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

export {activateForm};