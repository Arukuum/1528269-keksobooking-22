import {generateAds} from './ad.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const houseType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало',
};

const similarCard = (generateAds) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardFeatures = cardElement.querySelector('.popup__features');
  const cardPhotos = cardElement.querySelector('.popup__photos');
  const photo = cardElement.querySelector('.popup__photo');
  
  const generateFeatures = () => {
    cardFeatures.innerHTML = '';
    generateAds.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + generateAds.offer.features[i]);
      cardFeatures.appendChild(feature); 
    });
  };

  const generatePhotos = () => {
    cardPhotos.innerHTML = '';
    generateAds.offer.photos.forEach((item, i) => {
      photo.src = generateAds.offer.photos[i];
      cardPhotos.appendChild(photo.cloneNode(true));
    });
  };

  cardElement.querySelector('.popup__title').textContent = generateAds.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = generateAds.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = generateAds.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = houseType[generateAds.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = generateAds.offer.rooms + ' комнаты для ' + generateAds.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + generateAds.offer.checkin + ', выезд до ' + generateAds.offer.checkout;
  cardElement.querySelector('.popup__description').textContent = generateAds.offer.description;
  cardElement.querySelector('.popup__avatar').src = generateAds.autor.avatar;
  generateFeatures();
  generatePhotos();

  return cardElement;
};

// mapCanvas.appendChild(similarCard(generateAds[0]));
generateAds;
export {similarCard};