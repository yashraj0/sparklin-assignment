import React from 'react';
import OfferListing from './../offerlisting/OfferListing';
import BooksContainer from './../books/BooksContainer';

const Main = _ => {

    return (
        <div className='main_parent'>
            <div className='main_content'>
                <BooksContainer/>
                <OfferListing/>
            </div>
        </div>
    )
}

export default Main;
