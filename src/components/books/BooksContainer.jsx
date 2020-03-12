import React from 'react'
import {connect} from 'react-redux'
import Books from './Books'
import {addToCart} from './../../_actions/cartActions'

const BooksContainer = props => <Books {...props}/>

const mapStateToProps = (store) => {
    return {
        tabReducer : store.tabReducer,
        cartReducer : store.cartReducer
    }
}

const actionCreators = {
    addToCart,
}
  
export default connect(mapStateToProps, actionCreators)(BooksContainer);