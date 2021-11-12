import React, { useState, useEffect } from 'react';
import './Review.css';
import { Row } from 'react-bootstrap';
import SingleReview from '../HomeProducts/SingleReview/SingleReview';
import { Spinner } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://infinite-crag-35075.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="main_review_section">
            <h2 className="text-center text-white mb-5">What they're Saying</h2>
            <div className="container">
                <Row xs={1} md={3} className="g-4">

                    {
                        reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                        />)
                    }
                </Row>
                {

                    reviews.length === 0 && <div className="loading_spinner">
                        <Spinner animation="border" variant="info" />
                    </div>

                }
            </div>
        </div>
    );
};

export default Review;