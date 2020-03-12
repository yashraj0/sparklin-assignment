import {SET_TAB, REMOVE_TAB, SET_TAB_ACTIVE} from './../_constants/tabConstants'
import {navLinks} from './../globals/globalConstants';

const findDefaultActiveTab = () => {
   let active = navLinks[0]
   if(active.isMain) {
      return {id : active.id, title : active.title}
   } else {
      return active.childLinks.length ? active.childLinks[0] : {}
   }
}

const intialState = {
   tabList : [
      findDefaultActiveTab()
   ],
   currentActiveTab : findDefaultActiveTab()
}

const tabReducer = (state = intialState, action) => {
    switch(action.type) {
        case SET_TAB : 
           return {
              ...state,
               tabList : [...state.tabList, action.newTab]
           }

        case REMOVE_TAB :
           let filteredArray = state.tabList.filter(tab => tab.id!== action.removeId)
           return {
              ...state,
              tabList : [...filteredArray]
           }

        case SET_TAB_ACTIVE :
           return {
              ...state,
              currentActiveTab : action.newActiveTab
           }
           
        default :
           return state;
    }
}

export default tabReducer