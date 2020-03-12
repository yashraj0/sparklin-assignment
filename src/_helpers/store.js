import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../_reducers/rootReducer';
import { createLogger } from 'redux-logger'
import { loadState } from './localStorage';

const logger = createLogger({
  colors: {
    title: () => '#ff8a12',
    prevState: () => 'gray',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

//this function is executed everytime after a reload happens on the app so as to fetch the previous store
let persistedState = loadState();
//console.log('store extracted from localStorage : ', persistedState)

const store =  createStore(
  rootReducer, persistedState,
  applyMiddleware(logger)
);

export default store