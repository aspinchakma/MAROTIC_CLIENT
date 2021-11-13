import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from './../../../utilities/hooks/useAuth';
import { Alert } from '@mui/material';
import ManageAllDetails from './../../ManageAllDetails/ManageAllDetails';

const ManageAll = () => {
    const [orders, setOrders] = useState([]);

    const { modifiedCount, setModifiedCount } = useAuth();


    useEffect(() => {

        fetch(`https://infinite-crag-35075.herokuapp.com/manageAll`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders, modifiedCount]);
    const handleDelete = id => {
        const confirmMessage = window.confirm("Are You Sure Delete this item ?");
        if (confirmMessage) {
            fetch(`https://infinite-crag-35075.herokuapp.com/manageAll/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const newOrders = orders.filter(order => order._id !== id);
                        setOrders(newOrders);
                        alert('Successfully Deleted ')
                    }
                })
        }
    }
    const handleStatusUpdate = id => {

        fetch(`https://infinite-crag-35075.herokuapp.com/manageAll/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setModifiedCount(true)
                }
            })
    }


    return (
        <div>
            <h5 className="text-center">Manage All Orders</h5>
            <p className="text-center">You Have Total {orders.length} orders.</p>
            {orders.length ? <>


                <Row xs={1} md={3} className="g-4">
                    {
                        orders.map(order => <ManageAllDetails
                            key={order._id}
                            handleDelete={handleDelete}
                            order={order}
                            handleStatusUpdate={handleStatusUpdate}

                        />)
                    }
                </Row>

            </>
                :
                <Alert className="mt-5" severity="info">You Have No Any Orders</Alert>
            }
        </div>
    );
};

export default ManageAll;