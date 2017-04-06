import 'isomorphic-fetch';
import * as types from './action-types';
const API_KEY = '72e180735e28dcbc6ef42093d3e0af27';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://openweathermap.org/data/2.5/weather?q=`;

export const fetchData = (payload) => {
  return {
    type: types.ACTION,
    payload: new Promise(resolve => {
      let headers = new Headers({'Content-Type': 'application/json'});      
      console.log('fetch action fired', payload.city)
      return fetch(`${ROOT_URL}london,uk&APPID=${API_KEY}`, { mode: 'no-cors', headers }).then(response => {
        resolve(response.json());
      });
    })
  };
}
