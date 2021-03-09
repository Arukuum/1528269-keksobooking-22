import './map.js'
import './form.js'
import {getData} from './api.js';
import {createMarkersAds} from './map.js';
import {setFormSubmit} from './form.js';
import {changeFilter} from './filter.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

setFormSubmit();

getData((data) => {
  createMarkersAds(data);
  changeFilter(debounce(
    () => createMarkersAds(data),
    RERENDER_DELAY,
  ));
});

