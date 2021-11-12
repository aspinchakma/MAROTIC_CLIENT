import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigarion/Navigation';
import './SingleProductDetails.css';
import { Rating, Alert } from '@mui/material';
import { Spinner } from 'react-bootstrap';
import useAuth from './../../../utilities/hooks/useAuth';

const SingleProductDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [warning, setWarning] = useState(1);

    useEffect(() => {
        fetch(`https://infinite-crag-35075.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    // get data from input field 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const quantityNumber = Number(data?.quantity);

        if (Number(quantityNumber) <= 0) {
            return setWarning(quantityNumber)
        }
        setWarning(quantityNumber)
        const { name, price } = product;
        const order = { name, price, ...data };
        order.status = 'pending';
        fetch('https://infinite-crag-35075.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    alert('Successfully Added');
                    reset();
                }
            })

    };
    return (
        <div>
            <Navigation></Navigation>
            {
                product._id !== undefined && <div className="container mx-auto row">
                    <div className="col-lg-4">
                        <img
                            width="100%"
                            src={product.img}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-4 py-5 description_container">
                        <div>
                            <h3>{product.name}</h3>
                            <Rating
                                className="rating"
                                size="small"
                                name="read-only" value={product.rating} readOnly />
                            <h6 className="details_brand_name">Brand:{product.brand}</h6>
                            <p className="breaking_line"></p>
                            <p className="details_description">{product.description}</p>
                            <h5 className="details_product_price">${product.price}</h5>
                            {warning <= 0 && <Alert severity="warning">Note :Please set product quantity greater then 0.</Alert>}
                        </div>
                    </div>
                    <div className="col-lg-4 details_form_container py-5">
                        <h3 className="pb-3">Order Details</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <input value={user.displayName} {...register("displayName")} />
                            <input type="email" value={user.email} {...register("email")} />
                            <input type="number" {...register("quantity")} defaultValue="1" placeholder="Quantity" />
                            <input type="tel" {...register("phoneNumber", { required: true })} placeholder="Phone Number" required />

                            <input type="text" {...register("address", { required: true })} placeholder="Address" required />
                            <input type="submit" value="Place Order" />
                        </form>

                    </div>

                </div>
            }
            {
                product._id === undefined && <div className="loading_spinner">
                    <Spinner animation="border" variant="info" />
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default SingleProductDetails;