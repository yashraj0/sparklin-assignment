import React from 'react'
import {connect} from 'react-redux'
import TopHeader from './TopHeader'
import {removeFromCart, emptyCart} from './../../_actions/cartActions'

const TopHeaderContainer = props => <TopHeader {...props}/>

const mapStateToProps = (store) => {
    return {
        cartReducer : store.cartReducer
    }
}

const actionCreators = {
    removeFromCart, 
    emptyCart
}
  
export default connect(mapStateToProps, actionCreators)(TopHeaderContainer);