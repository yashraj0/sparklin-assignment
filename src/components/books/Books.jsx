import React, { Fragment } from 'react'
import { userTags, booksListing} from './../../globals/globalConstants';
import TabsContainer from './../tabs/TabsContainer';
import Slideshow from './../slideshow/Slideshow';

const Books = (props) => {

    const {currentActiveTab} = props.tabReducer;
    const {cart} = props.cartReducer;

    const renderBookstore = () => {
        return (
            <Fragment>
                <Slideshow/>
                {
                    userTags.map((tag, index) => {
                        return (
                            <div key={'bookstore'+index}>
                                { renderCategoryBooks(tag) }
                            </div>
                        )
                    })
                }
            </Fragment>
        )
        
    }

    const renderCategoryBooks = ({title, id}) => {
        let flag = false;
        let bookNodes = booksListing.map(book => {
            if(book.tags.includes(id)) {
                flag = true;
                return (
                    <div key={book.id} className='book'>
                        <div className='book_image'>
                            <img src={book.image} alt='book_cover'/>
                            {
                                book.specialTag ? 
                                <div className='specialTag'>{book.specialTag}</div>
                                 : null
                            }
                        </div>
                        <div className='title'>{book.title}</div>
                        <div className='authors'>{book.authors.join(', ')}</div>
                        <div className='price_rating flex-center-space-between'>
                            <div className='price'>Rs. {book.price}</div>
                            <div className='rating'>
                                {renderRatings(book.rating)}
                            </div>
                        </div>
                        <div className='flex-center-space-between'>
                            <div className='button flex-center-center cart' onClick={()=>{ handleAddToCart(book.id) }}>ADD TO CART</div>
                            <div className='button flex-center-center buy' onClick={()=>{ handleBuyNow(book.id) }}>BUY NOW</div>
                        </div>
                    </div>
                )
            }
            return null;
        })
        return (
            <div className='books_wrapper'>
                <div className='tag_header flex-center-space-between'>
                    <div className='heading_small'>{title}</div>
                    <div className='more'>View all</div>
                </div>
                <div className='books'>
                    {
                        flag ? bookNodes : <div className='no_content'>No books in this category.</div>
                    }
                </div>
            </div>
        )
    }

    const renderRatings = (rating = 0) => {
        let yellowStars = rating, emptyStars = 5 - rating, arr = [];
        while(yellowStars) {
            arr.push(<span key={yellowStars}><i className='fa fa-star yellow'></i></span>)
            yellowStars--;
        }
        if(emptyStars) {
            while(emptyStars) {
                arr.push(<span key={emptyStars+rating}><i className='fa fa-star gray'></i></span>)
                emptyStars--
            }
        }
        return arr
    }

    const handleAddToCart = (bookId) => {
        if(cart.includes(bookId)) {
            //already in cart
            alert('This book is already in cart !')
        } else {
            props.addToCart(bookId)
        }
    }

    const handleBuyNow = (bookId) => {

    }

    return(
        <div className='books_parent'>
            <TabsContainer/>
            {
                (currentActiveTab.id === 'bookstore_home') ?
                  renderBookstore() : renderCategoryBooks(currentActiveTab)
            }
        </div>
    )
}

export default Books