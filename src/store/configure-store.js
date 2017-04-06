import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';


export default () => {
  return createStore(rootReducer, applyMiddleware(promiseMiddleware()));
};
