import './map.js'
import './form.js'
import {getData} from './api.js';
import {createMarkersAds} from './map.js'
import {setFormSubmit} from './form.js'

getData((data) => {
  createMarkersAds(data);
});

setFormSubmit();