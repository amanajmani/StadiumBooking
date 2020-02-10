import {createStore, applyMiddleware, compose} from 'redux';
import AppReducers from '../app/reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

function configMiddleware() {
  const middlewares = applyMiddleware(thunkMiddleware, logger);
  return compose(middlewares);
}

const initialstate = {};
const middlewares = configMiddleware();
const store = createStore(AppReducers, initialstate, middlewares);

export default store;
