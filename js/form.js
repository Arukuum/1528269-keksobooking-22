const formAd = document.querySelector('.ad-form');
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