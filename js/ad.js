import {getRandomNumber, getRandomInt, getRandomValue, getRandomArray} from './until.js'

const OFFER_TITLE = [
  'Stella House Vega Kawaguchiko',
  'Classic Japanese farm house',
  'Yasuragi-IKEBUKURO',
  'Luxury Condo in Shinjuku',
  'Oakwood Premier',
];
const OFFER_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const OFFER_CHECKTIME = [
  '12:00',
  '13:00',
  '14:00',
];
const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const OFFER_DESCRIPTION = [
  'Дом окружен соснами. Гости могут наслаждаться комфортным пребыванием на лоне природы',
  'Этот дом долгие годы был разрушен, затем отремонтирован в традиционном стиле',
  'К услугам гостей номера с кондиционером, общий лаундж, бесплатный Wi-Fi и сад',
  'Удобно расположен в 3 минутах ходьбы от станции скоростной железной дороги',
  'Интерьер спроектирован таким образом, чтобы обеспечить непринужденную атмосферу и большую гостиную для отдыха гостей',
];
const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const ADS_COUNT = 10;

const createAd = () => {
  return {
    autor: {
      avatar: 'img/avatars/user0' + getRandomNumber(1,8) + '.png',
    },
    offer: {
      title: getRandomValue(OFFER_TITLE),
      address: getRandomNumber(0,100) + ', ' + getRandomNumber(0,100),
      price: getRandomNumber(500,10000),
      type: getRandomValue(OFFER_TYPE),
      rooms: getRandomNumber(1,4),
      guests: getRandomNumber(1,10),
      checkin: getRandomValue(OFFER_CHECKTIME),
      checkout: getRandomValue(OFFER_CHECKTIME),
      features: getRandomArray(OFFER_FEATURES),
      description: getRandomValue(OFFER_DESCRIPTION),
      photos: getRandomValue(OFFER_PHOTOS),
    },
    location: {
      x: getRandomInt(35.65, 35.7, 5),
      y: getRandomInt(139.7, 139.8, 5),
    }, 
  };
};

const generateAds = new Array(ADS_COUNT).fill(null).map(() => createAd());

generateAds;

