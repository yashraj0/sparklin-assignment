import { SET_TAB, REMOVE_TAB, SET_TAB_ACTIVE } from "../_constants/tabConstants";

export function setTab(newTab) {
    return {
        type : SET_TAB,
        newTab
    }
}

export function removeTab(removeId) {
    return {
        type : REMOVE_TAB,
        removeId
    }
}

export function setTabActive(newActiveTab) {
    return {
        type : SET_TAB_ACTIVE,
        newActiveTab
    }
}