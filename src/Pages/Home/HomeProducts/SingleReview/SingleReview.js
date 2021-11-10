import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './SingleReview.css';
import { Rating } from '@mui/material';

const SingleReview = ({ review }) => {
    const { name, rating, description } = review;
    return (
        <div>
            <Col>
                <Card className="review_card_mini_container">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <Rating
                                size="small"
                                name="read-only" value={rating} readOnly /><br />
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleReview;