import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from './../../../utilities/hooks/useAuth';
import { Alert } from '@mui/material';
import DetailsMyOrders from './DetailsMyOrders/DetailsMyOrders';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {

        fetch(`https://infinite-crag-35075.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [myOrders, user.email]);


    const handleDelete = id => {
        const confirmMessage = window.confirm("Are You Sure Delete this item ?");
        if (confirmMessage) {
            fetch(`https://infinite-crag-35075.herokuapp.com/orders/${id}`, {
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
            <h3 className="text-center">My Orders</h3>
            <p className="text-center">Total orders {myOrders.length}</p>
            {myOrders.length ? <Row xs={1} md={3} className="g-4">
                {
                    myOrders.map(myOrder => <DetailsMyOrders
                        key={myOrder._id}
                        myOrder={myOrder}
                        handleDelete={handleDelete}
                    />)
                }
            </Row>
                :
                <Alert className="mt-5" severity="info">Please Order Product</Alert>
            }
        </div>
    );
};

export default MyOrders;