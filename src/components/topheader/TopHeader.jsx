import React from 'react';
import Logo from './../../assets/images/Taxmann Logo Regd.png'

const TopHeader = props => {
    const {cart} = props.cartReducer;
    
    return (
        <div className = 'header_parent'>
            <div className='header'>
                <div className='left'>
                    <div className='brand_logo'>
                        <img src={Logo} alt='brand_logo'/>
                    </div>
                </div>
                <div className='middle'>
                    <div className='search_bar'>
                        <div className='search_icon'>
                            <i className='fa fa-search'></i>
                        </div>
                        <input
                            type="text"
                            name="textFilter"
                            className='search_field'
                            placeholder='Search anything on tax and corporate law in bookstore'
                        />
                    </div>
                </div>
                <div className='right'>
                    <div className='shared_with flex-center-space-between'>
                        <div className='user flex-center-center' style={{background:'lightgreen'}}>
                            R
                        </div>
                        <div className='user flex-center-center' style={{background:'mediumvioletred'}}>
                            E
                        </div>
                        <div className='user flex-center-center' style={{background:'blueviolet'}}>
                            C
                        </div>
                        <div className='user_extra flex-center-center'>
                            <i className='fa fa-angle-down'></i>
                        </div>
                    </div>
                    <div className='icons'>
                        <div className='icon fa fa-inbox'></div>
                        <div className='icon fa fa-bell'></div>
                        <div className='icon fa fa-user-circle'></div>
                        <div className={`icon fa fa-shopping-cart`}>
                            {cart.length ? <div className='has_content flex-center-center'>{cart.length}</div> : null}
                        </div>
                    </div>
                    <div className='stack_wrapper'>
                        <div className='stack flex-center-center'>
                            <span className='hr'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
