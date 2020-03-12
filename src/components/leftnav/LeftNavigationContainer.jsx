import React from 'react'
import {connect} from 'react-redux'
import LeftNavigation from './LeftNavigation'
import {setTab, setTabActive} from './../../_actions/tabActions'

const LeftNavigationContainer = props => <LeftNavigation {...props}/>

const mapStateToProps = (store) => {
    return {
        tabReducer : store.tabReducer
    }
}

const actionCreators = {
    setTab,
    setTabActive
}
  
export default connect(mapStateToProps, actionCreators)(LeftNavigationContainer);