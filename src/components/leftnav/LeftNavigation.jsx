import React from 'react';
import {navLinks, navQuickLinks} from './../../globals/globalConstants';
import findObj from './../../util/findObjectInArray';

const LeftNavigation = (props) => {
    //console.log('tabReducer in LeftNavigation: ', props.tabReducer)
    const {tabList, currentActiveTab} = props.tabReducer
    const [linksOpen, setLinksOpen] = React.useState([])
    const [isHidden, setIsHidden] = React.useState(false)

    const toggleLinkChilds = (e, linkObj) => {
        //it's a link with children
        if(!linkObj.isMain && linkObj.childLinks.length) {
            if(linksOpen.includes(linkObj.id)) {
                //remove it from array
                let filteredArray = linksOpen.filter(l => l!== linkObj.id)
                setLinksOpen(filteredArray)
            } else {
                // add it to the array
                setLinksOpen([...linksOpen, linkObj.id])
            }
        } else {
            //it's a link without any child
            manageTabs(linkObj)
        }
    }

    const manageTabs = (linkObj) => {
        if( tabList.length>=1 && findObj(tabList, linkObj.id) ) {
            //if this tab is already in the list just make it active
            props.setTabActive({id:linkObj.id, title:linkObj.title})
        } else {
            //if this tab is not there in tabList
            props.setTab({id:linkObj.id, title:linkObj.title})
            props.setTabActive({id:linkObj.id, title:linkObj.title})
        }
    }

    const childrenHeightCalculator = (children) => {
        let value = children.reduce((acc, child) => {
            return acc + ( child.title.length >= 30 ? 44 : 28 )
        }, 0)
        return value
    }

    const renderLinks = (linksArray) => {
        return linksArray.map((linkObj, index) => {
            let len = linkObj.childLinks.length
            return (
                <div key={`index_${linkObj.id}`} className='link_main'>
                    <div 
                        className={`text ${currentActiveTab.id===linkObj.id ? 'active' : ''}`}
                        onClick={ (e) => toggleLinkChilds(e, linkObj) }
                    >
                        {
                            !linkObj.isMain && len>0 ? (
                                <span className="more">
                                    {
                                        linksOpen.includes(linkObj.id) ? '-' : '+'
                                    }
                                </span>
                            ) : <span className="more">&nbsp;&nbsp;</span>
                        }
                        {linkObj.title}
                    </div>
                    <div 
                        className='children_main'
                        style={ linksOpen.includes(linkObj.id) ? {height:childrenHeightCalculator(linkObj.childLinks)} : {} }
                    >
                        {
                            !linkObj.isMain && len>0 ? (
                                linkObj.childLinks.map((childObj, index) => {
                                    return (
                                        <div key = {index} 
                                            className={`child ${currentActiveTab.id===childObj.id ? 'active' : ''}`}
                                            onClick={() => manageTabs(childObj)}
                                        >
                                            {childObj.title}
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                </div>
            )
        })
    }

    return (
        <div className = {`nav_parent ${isHidden ? 'hidden' : 'shown'}`}>
            <div className='nav_toggle'>
                <div className='toggle_parent flex-center-start' 
                    onClick={() => { setIsHidden(!isHidden) }}
                >
                    <span>{isHidden ? 'Show' : 'Hide'}</span>
                    <span className={`arrow ${isHidden ? 'hidden' : 'shown'}`}>
                        <i className='fa fa-chevron-left'></i>
                    </span>
                </div>
            </div>
            <div className={`nav ${isHidden ? 'hidden' : 'shown'}`}>
                { renderLinks(navLinks) }
                <div className='quick_links'>
                    Quick Links
                </div>
                { renderLinks(navQuickLinks) }
            </div>
        </div>
    )
}

export default LeftNavigation;