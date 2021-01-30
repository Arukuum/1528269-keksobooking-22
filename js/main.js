const getRandomNumber  = function (min, max) {
  if (max < min) {
    alert('max ('+ max +') must be more min ('+ min +').');
  }
  if (min < 0 || max < 0) {
    alert('max or min must be more 0');
  }
  if (min === max) {
    return min;  
  } 
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

alert(getRandomNumber(0.59, 8));


const getRandomInt = function (min, max, numberFloatPoint) {
  if (max < min) {
    alert('max ('+ max +') must be more min ('+ min +').');
  }
  if (min < 0 || max < 0) {
    alert('max or min must be more 0');
  }
  if (min === max) {
    return min;  
  } 
  return (Math.random() * (max - min) + min).toFixed(numberFloatPoint);
};

alert(getRandomInt(2, 4, 6));