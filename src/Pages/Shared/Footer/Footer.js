import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_main_container">
            <div className="container row mx-auto footer_container">
                <div className="col-lg-3 py-2">
                    <img
                        width="80%"
                        src="https://i.ibb.co/DDfy6XH/logo-trang.png" alt="" />
                </div>
                <div className="col-lg-2 py-2">
                    <h3>QUICK LINKS</h3>
                    <p>Search</p>
                    <p>Help</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Details</p>
                </div>
                <div className="col-lg-3 py-2">
                    <h3>CUSTOMER SERVICE</h3>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Refunds & Returns</p>
                    <p>Deliveries</p>
                </div>
                <div className="col-lg-4 py-2">
                    <h3>CONTACT US</h3>
                    <p><i className="far fa-envelope"></i> aspinchakma2019@gmail.com</p>
                    <p>Rangamati, Chittagong,Bangladesh</p>
                </div>
            </div>
            <p className="footer_copyright">Copyright © 2021, Marotic - Watch Shop</p>
        </div>
    );
};

export default Footer;