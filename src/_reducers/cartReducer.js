import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './../_constants/cartConstants'

const intialState = {
   cart : [
      //array of strings
   ]
}

const tabReducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_TO_CART : 
           return {
              ...state,
               cart : [...state.cart, action.newItem]
           }

        case REMOVE_FROM_CART :
           let filteredArray = state.cart.filter(item => item !== action.removeId)
           return {
              ...state,
              cart : [...filteredArray]
           }

        case EMPTY_CART :
           return {
              cart : []
           }
           
        default :
           return state;
    }
}

export default tabReducer