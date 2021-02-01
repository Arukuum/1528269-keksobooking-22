'use strict';

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

alert(getRandomNumber(0, 1));


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

alert(getRandomInt(2, 5, 6));