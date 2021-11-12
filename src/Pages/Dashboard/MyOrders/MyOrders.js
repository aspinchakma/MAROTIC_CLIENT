import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from './../../../utilities/hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {

        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [myOrders, user.email]);


    const handleDelete = id => {
        const confirmMessage = window.confirm("Are You Sure Delete this item ?");
        if (confirmMessage) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const newOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(newOrders);
                        alert('Successfully Deleted ')
                    }
                })
        }
    }
    return (
        <div>
            <h3>This is My Orders page</h3>
            <p className="text-center">Your Total orders {myOrders.length}</p>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders.map(myOrder => <MyOrder
                            key={myOrder._id}
                            myOrder={myOrder}
                            handleDelete={handleDelete}
                        />)
                    }
                </tbody>


            </Table>
        </div>
    );
};

export default MyOrders;