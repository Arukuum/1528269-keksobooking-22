import './map.js'
import './form.js'
import {getData} from './api.js';
import {createMarkersAds} from './map.js'
import {setFormSubmit} from './form.js'
import {changeFilter} from './filter.js';

setFormSubmit();

getData((data) => {
  createMarkersAds(data);
  changeFilter(() => createMarkersAds(data));
});

