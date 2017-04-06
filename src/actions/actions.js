import * as types from './action-types';

export const action = (payload) => {
  return {
    type: types.ACTION,
    payload: new Promise(resolve => {
      fetch(`api link`).then(response => {
        resolve(response.json());
      });
    })
    // or promise: new Promise()
  };
}

