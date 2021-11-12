import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://infinite-crag-35075.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added Successfully ');
                    reset();
                }
            })
    };
    return (
        <div className="container row mx-auto">
            <div className="col-lg-3">

            </div>
            <div className="col-lg-6">
                <h4 className="text-center mb-3">Add Product With Details</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="main_form_container">


                    <input {...register("name")} required placeholder="Product Name" />
                    <textarea {...register("description")} required placeholder="Description" />
                    <input type="number" {...register("price")} required placeholder="Price" />
                    <input {...register("brand")} required placeholder="Brand" />
                    <input type="number" {...register("rating")} required placeholder="Rating" />
                    <input {...register("img")} required placeholder="Image Link" />


                    <input type="submit" />
                </form>
            </div>
            <div className="col-lg-3">

            </div>

        </div>
    );
};

export default AddProduct;