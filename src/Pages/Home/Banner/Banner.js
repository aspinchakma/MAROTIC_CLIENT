import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=" main_banner_container">
            <div className="container mx-auto row mini_container">
                <div className="col-lg-6 banner_content py-5">
                    <div>
                        <h1 className="banner_main_header">Built for men</h1>
                        <h2 className="banner_second_header">The house watches</h2>
                        <p className="banner_paragraph">
                            Donec nec justo eget felis facilisis fermentum. Aliquam Aenean.<br />
                            dignissim pellentesque felis.
                        </p>
                        <NavLink to="/products">
                            <button className="banner_button">MORE PRODUCT</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 py-5">
                    <img
                        width="95%"
                        src="https://i.ibb.co/8N9Ffzf/bg-slideshow-v1-2-ok.png"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;