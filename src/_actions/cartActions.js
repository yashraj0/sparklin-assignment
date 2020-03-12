import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './../_constants/cartConstants'

export function addToCart(newItem) {
    return {
        type : ADD_TO_CART,
        newItem
    }
}

export function removeFromCart(removeId) {
    return {
        type : REMOVE_FROM_CART,
        removeId
    }
}

export function emptyCart() {
    return {
        type : EMPTY_CART
    }
}