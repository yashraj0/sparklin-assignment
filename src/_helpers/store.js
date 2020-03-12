import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../_reducers/rootReducer';
import { createLogger } from 'redux-logger'
 
const logger = createLogger({
  colors: {
    title: () => '#ff8a12',
    prevState: () => 'gray',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

const store =  createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store