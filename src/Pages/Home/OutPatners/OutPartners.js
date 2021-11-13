import React from 'react';
import './OurPartners.css';

const OurPartners = () => {
    return (
        <div className="our_partners_main_container">
            <h3 className="text-center mb-5">The great experience</h3>
            <div className="row container mx-auto">
                <div className="col-lg-3 text-center py-3">
                    <img width="90%" src="https://i.ibb.co/djFXXkh/client6-8e93c68a-f79a-49ef-9b8f-21569ff89cf6-250x250.png" alt="" />
                </div>
                <div className="col-lg-3 text-center py-3">
                    <img width="90%" src="https://i.ibb.co/vH5f8vr/client5-a0da5652-9304-43c6-847c-92778aae48b7-250x250.png" alt="" />
                </div>
                <div className="col-lg-3 text-center py-3">
                    <img width="90%" src="https://i.ibb.co/q9DS4BB/client4-ff7c56f6-25ab-4616-904a-e1c7b2812066-250x250.png" alt="" />
                </div>
                <div className="col-lg-3 text-center py-3">
                    <img width="90%" src="https://i.ibb.co/4MnPxSQ/client3-50109f47-cc2b-438c-80d1-d5a6d59c4064-250x250.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default OurPartners;