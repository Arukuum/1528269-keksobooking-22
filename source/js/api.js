import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } throw new Error();
    })  
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Произошла ошибка. Попробуйте позже');
    });
};

const sendData = (onSuccess, onFail, body) => { 
  fetch (
    'https://22.javascript.pages.academy/keksobooking/',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      (response.ok) ? onSuccess() : onFail();
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};