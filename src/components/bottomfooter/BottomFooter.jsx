import React from "react";
import Logo from './../../assets/images/Taxmann Logo Regd.png'

const BottomFooter = _ => {
    return (
        <div className='footer_parent'>
            <div className='first'>
                <div className='logo'>
                    <img src = {Logo} alt='brand_logo'/>
                    <div className='text'>Tax & Corporate laws of INDIA</div>
                </div>
                <div className='desc'>
                    Everything you need on Income Tax, GST and Corporate Law. Authentic databases, books, journals, Practice and Exam platforms.
                </div>
                <div className='icons'>
                    <span><i className='fa fa-facebook-square'></i></span>
                    <span><i className='fa fa-twitter'></i></span>
                    <span><i className='fa fa-linkedin'></i></span>
                    <span><i className='fa fa-youtube'></i></span>
                </div>
                <div className='desc'>
                    &copy; 2019 Taxmann.com. All rights reserved.
                </div>
            </div>
            <div className='second'>
                <div>
                    <ul>
                        <li className='heading'>Products</li>
                        <li>Research</li>
                        <li>Practice</li>
                        <li>Exam</li>
                        <li>Complaince</li>
                        <li>Taxmann Bookstore</li>
                        <li>Taxxman Blog</li>
                    </ul>
                    <ul>
                        <li className='heading'>About Company</li>
                        <li>History</li>
                        <li>Board Of Directors</li>
                        <li>Media Coverage</li>
                        <li>Taxmann Education</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='heading'>Catalogue</li>
                        <li>Academic</li>
                        <li>Professional</li>
                        <li>Bare Acts</li>
                        <li>Banking & Finance</li>
                        <li>NISM Certification Courses</li>
                        <li>One Solution TDS & ITR</li>
                        <li>Goods & Services Tax (GST)</li>
                        <li>LLB Series</li>
                        <li>Insolvency & Bankruptcy</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='heading'>Authors</li>
                        <li>Academic</li>
                        <li>Professional</li>
                        <li>A - Z</li>
                    </ul>
                    <ul>
                        <li className='heading'>Bookstore Support</li>
                        <li>Quick Delivery with Fedex</li>
                        <li>Secured Payment</li>
                        <li>Free shipping above Rs. 350</li>
                        <li>Missed call support @ 4556 2222</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='heading'>Business Support</li>
                        <li>Sell with Taxmann</li>
                        <li>Locate Dealers</li>
                        <li>Locate Representatives</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li className='heading'>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Payment Terms</li>
                        <li>Disclaimer</li>
                        <li>EULA</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter;