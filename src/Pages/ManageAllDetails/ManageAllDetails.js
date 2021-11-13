import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ManageAllDetails = ({ order, handleDelete, handleStatusUpdate }) => {
    const { email, price, quantity, status, address, _id, phoneNumber } = order;
    return (
        <Col>
            <Card className="single_orders_card_details">

                <Card.Body>
                    <h5>Email: {email}</h5>
                    <h6>Address: {address}</h6>
                    <h6>Phone Number: {phoneNumber}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Total Price :{price * quantity}</h6>
                    <h6>Status: {status}</h6>
                    <h6>Update Status:
                        {
                            status === 'pending' ? <button className="update_button" onClick={() => handleStatusUpdate(_id)}>Update</button> :
                                <span>Updated</span>
                        }
                    </h6>

                    <p className="mt-4"><button onClick={() => handleDelete(_id)} className="delete_button">Delete</button></p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageAllDetails;