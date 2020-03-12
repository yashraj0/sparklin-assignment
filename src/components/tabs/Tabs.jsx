import React from 'react';

const Tabs = (props) => {
    const {tabList, currentActiveTab} = props.tabReducer;

    const removeTab = (id) => {
        let length = tabList.length
        //boundary cases for when only two tabs are there
        if(length===2 && id===currentActiveTab.id) {
            if(id===tabList[0].id) props.setTabActive(tabList[1])
            if(id===tabList[1].id) props.setTabActive(tabList[0])
            props.removeTab(id)
            return
        }
        //if the tab being closed is the active tab and the last tab then another tab has to be made active
        if(id === currentActiveTab.id && id === tabList[length-1].id ) {
            console.log('going to close the curren active tab and last tab :', id)
            let last_tab = tabList[length - 2]
            props.setTabActive(last_tab)
            props.removeTab(id)
            return
        }
        let last_tab = tabList[length - 1]
        props.setTabActive(last_tab)
        props.removeTab(id)
    }

    return (
        <div className='tab_list flex-center-start'>
            {
                tabList.map((tab, index) => {
                    return (
                        <div key={index} 
                            className={
                                `tab flex-center-space-between ${currentActiveTab.id === tab.id ? 'active' : ''}`
                            }
                            
                        >
                            <div className = 'title' onClick={()=>{props.setTabActive(tab)}}>
                                {tab.title}
                            </div>
                            {   //don't show close icon when there's only one tab active
                                tabList.length > 1 ?
                                <div className = 'close' onClick={() => {removeTab(tab.id)}}>
                                    <i className='fa fa-close'></i>
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>  
    )
}

export default Tabs;