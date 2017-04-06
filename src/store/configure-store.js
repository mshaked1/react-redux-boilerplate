import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';


const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware, promiseMiddleware()));
};

export default configureStore;