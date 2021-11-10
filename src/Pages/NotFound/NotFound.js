import React from 'react';
import './NotFound.css';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="main_notfound_container">
            <div className="row container mx-auto">
                <div className="col-lg-6 not_found_mini_one py-2">
                    <p className="not_found_status">404</p>
                </div>
                <div className="col-lg-6 not_found_mini_two py-2">
                    <p>Sorry, this page isn't available!</p>

                    <NavLink to="/">
                        <button className="not_found_button">
                            VISIT HOMEPAGE <i className="fas fa-arrow-right arrow_icon_two"></i>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};


export default NotFoundPage;