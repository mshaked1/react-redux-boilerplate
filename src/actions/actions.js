import 'isomorphic-fetch';
import * as types from './action-types';
// const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
const ROOT_URL = `http://openweathermap.org/data/2.5/weather?q=`;

export const fetchData = (payload) => {
  return {
    type: types.ACTION,
    payload: new Promise(resolve => {
      console.log('fetch action fired', payload.city)
      return fetch(`${ROOT_URL}${payload.city},us`).then(response => {
        resolve(response.json());
      });
    })
  };
}

