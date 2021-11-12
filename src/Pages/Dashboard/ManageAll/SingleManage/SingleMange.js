import React from 'react';

const SingleMange = ({ order, handleDelete, handleStatusUpdate }) => {
    const { email, price, quantity, status, address, _id } = order;
    return (
        <tr>

            <td>{email}</td>
            <td>{address}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
            <td>{status}</td>
            {
                status === 'pending' ? <td><button className="update_button" onClick={() => handleStatusUpdate(_id)}>Update</button></td> :
                    <td>Updated</td>
            }

            <td><button onClick={() => handleDelete(_id)} className="delete_button">Delete</button></td>
        </tr>
    );
};

export default SingleMange;