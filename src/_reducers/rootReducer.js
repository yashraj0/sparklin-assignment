import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    tabReducer, cartReducer
});