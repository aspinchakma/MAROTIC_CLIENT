import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleMange from './SingleManage/SingleMange';
import useAuth from './../../../utilities/hooks/useAuth';
import { Alert } from '@mui/material';

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
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <SingleMange
                                key={order._id}
                                handleDelete={handleDelete}
                                order={order}
                                handleStatusUpdate={handleStatusUpdate}

                            />)
                        }
                    </tbody>


                </Table>
            </>
                :
                <Alert className="mt-5" severity="info">You Have No Any Orders</Alert>
            }
        </div>
    );
};

export default ManageAll;