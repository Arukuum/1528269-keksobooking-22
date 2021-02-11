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

export {getRandomNumber, getRandomInt, getRandomValue, getRandomArray};