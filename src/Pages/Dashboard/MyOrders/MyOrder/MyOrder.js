import React from 'react';
import './MyOrder.css';

const MyOrder = ({ myOrder, handleDelete }) => {
    const { name, status, _id } = myOrder;
    return (
        <tr>

            <td>{name}</td>

            <td>{status}</td>
            <td><button onClick={() => handleDelete(_id)} className="delete_button">Delete</button></td>
        </tr>
    )
}

export default MyOrder;