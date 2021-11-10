import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="main_subscribe_section">
            <div className="container row mx-auto">
                <h2 className="text-center text-white mb-4">Newsletter</h2>
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8 subscribe_mini_container">
                    <input type="email" /><button>SUBSCRIBE</button>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        </div>
    );
};

export default Subscribe;