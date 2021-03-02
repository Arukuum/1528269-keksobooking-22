const ALERT_SHOW_TIME = 5000;

const getRandomNumber  = (min, max) => {
  min = Math.ceil(min); 
  max = Math.floor(max);
  if (max < min) {
    throw new Error('max ('+ max +') must be bigger than min ('+ min +').');
  }
  if (min < 0) {
    throw new Error('min must be bigger than or equal 0');
  }
  if (min === max) {
    return min;  
  } 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomInt = (min, max, numberFloatPoint) => {
  if (max < min) {
    throw new Error('max ('+ max +') must be bigger than min ('+ min +').');
  }
  if (min < 0) {
    throw new Error('min must be bigger than or equal 0');
  }
  if (min === max) {
    return min;  
  } 
  return (Math.random() * (max - min) + min).toFixed(numberFloatPoint);
};

const getRandomValue = (value) => {
  return value[getRandomNumber(0, value.length - 1)]
};

const getRandomArray = (array) => {
  return array.slice(getRandomNumber(0, array.length))
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 500;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = '10%';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isClickEvent = (evt) => {
  return evt.type === 'click';
};

export {getRandomNumber, getRandomInt, getRandomValue, getRandomArray, isEscEvent, isClickEvent, showAlert};