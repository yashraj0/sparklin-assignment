import React from 'react'
import {offerListing} from './../../globals/globalConstants'

const OfferListing = _ => {

    return (
        <div className='offers_parent'>
            <div className='fetaures_card'>
                <div className='wrapper'>
                    <div className='flex-center-start'>
                        <i className='fa fa-truck'></i>
                        <div>
                            <div className='title'>Quick Delivery</div>
                            <div className='desc'>FedEx Courier in most of the Cities</div>
                        </div>
                    </div>
                    <div className='flex-center-start'>
                        <i className='fa fa-archive'></i>
                        <div>
                            <div className='title'>Free Shipping</div>
                            <div className='desc'>Across India on order above Rs. 350</div>
                        </div>
                    </div>
                    <div className='flex-center-start'>
                        <i className='fa fa-key'></i>
                        <div>
                            <div className='title'>Secured Payment</div>
                            <div className='desc'>Taxmann provides secure service</div>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className='heading'>Offers</div>
            <div className='offers_list'>
                {
                    offerListing.map((offer, index) => {
                        return (
                            <div key={index} className='offer'>
                                <img src={offer.image} alt='offer_cover'/>
                                <div className='content'>
                                    <div className='title'>{offer.title}</div>
                                    <div className='desc'>{offer.description}</div>
                                    <div className='extra'>Know more</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>   
    )

}

export default OfferListing