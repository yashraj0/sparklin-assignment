import React from 'react'
import {connect} from 'react-redux'
import {removeTab, setTabActive} from './../../_actions/tabActions'
import Tabs from './Tabs'

const TabsContainer = props => <Tabs {...props}/>

const mapStateToProps = (store) => {
    return {
        tabReducer : store.tabReducer
    }
}

const actionCreators = {
    removeTab,
    setTabActive
}
  
export default connect(mapStateToProps, actionCreators)(TabsContainer);