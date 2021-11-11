import { Rating } from '@mui/material';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './SingleProduct.css';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    return (
        <div>
            <Col>
                <Card className="single_card py-2">

                    <Card.Img variant="top"
                        width="100px"
                        src={product?.img} />
                    <Card.Body>
                        <Card.Title className="product_name">{product?.name}</Card.Title>
                        <Card.Text>
                            <h4 className="product_price">${product?.price} </h4>
                            <Rating
                                size="small"
                                name="read-only" value={product?.rating} readOnly /><br />
                            <Link to={`/product/${product?._id}`}><button className="buy_now_button">BUY NOW</button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default SingleProduct;