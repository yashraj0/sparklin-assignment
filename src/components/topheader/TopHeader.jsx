import React, { Fragment } from 'react';
import Logo from './../../assets/images/Taxmann Logo Regd.png'
import { booksListing } from './../../globals/globalConstants';

const TopHeader = props => {
    const {cart} = props.cartReducer;

    const renderCart = () => {
        let totalPrice = 0
        let cartItems = booksListing.map((book) => {
            //if this book is added in the cart then
            if(cart.includes(book.id)) {
                let p = parseInt(book.price.replace(',' , '') , 10)
                totalPrice += p
                return (
                    <div key={book.id} className='item'>
                        <img src={book.image} alt={book.id}/>
                        <div className='info'>
                            <div className='title'>{book.title}</div>
                            <div className='price'>Rs. {book.price}</div>
                            <div className='delete flex-center-center' onClick={ () => props.removeFromCart(book.id)}>
                                <i className='fa fa-trash'></i>
                            </div>
                        </div>
                    </div>
                )
            }
            //else return null
            return null;
        })
        return (
            <div className='cart_parent'>
                {
                    cart.length > 0 ? (
                        <Fragment>
                            <div>
                                {cartItems}
                            </div>
                            <div className='flex-center-center' style={{margin:'0.5rem'}}>
                                <div className='button flex-center-center cart' 
                                    style={{padding:'8px 0'}}
                                    onClick={() => props.emptyCart()}
                                >
                                    EMPTY CART
                                </div>
                                <div className='button flex-center-center buy' 
                                    style={{padding:'8px 0'}}
                                >
                                    <span className='checkout'>CHECKOUT</span>
                                    <span className='total'>Rs. {totalPrice}</span>
                                </div>
                            </div>
                        </Fragment>
                    ) : <div className='no_content'>Cart is empty.</div>
                }
            </div>
        );
    }
    
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
                        <div className={`cart icon fa fa-shopping-cart`}>
                            {cart.length ? <div className='has_content flex-center-center'>{cart.length}</div> : null}
                            {renderCart()} 
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
