import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './DetailsMyOrders.css';

const DetailsMyOrders = ({ myOrder, handleDelete }) => {
    const { name, price, quantity, status, _id } = myOrder;
    return (
        <Col>
            <Card className="single_orders_card_details">
                <Card.Body>
                    <h5>Product Name:{name}</h5>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Total Price:{price * quantity}</h6>
                    <h6>Status:{status}</h6>
                    <h6><button onClick={() => handleDelete(_id)} className="delete_button">Delete</button></h6>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DetailsMyOrders;