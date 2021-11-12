import React, { useState } from 'react';
import { Rating } from '@mui/material'
import useAuth from './../../../utilities/hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const [value, setValue] = useState(2);
    const [description, setDescription] = useState('');
    const { user } = useAuth();

    const handleDescription = e => {
        const description = e.target.value;
        setDescription(description)
    }

    const handlePost = () => {
        const newReview = {
            name: user.displayName,
            description: description,
            rating: value,
        }
        console.log(newReview)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added');
                    setDescription('');
                }
            })
    }

    return (
        <div className="row container mx-auto">
            <div className="col-lg-3">

            </div>
            <div className="col-lg-6 mini_review_container">
                <h2 className="text-center mb-3">Please Add Review</h2>
                <textarea onBlur={handleDescription} required />
                <input type="text" value={user.displayName} disabled />
                <p className="text-center mb-0"><small>Please select rating rate.</small></p>
                <div className="text-center">
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    /><br />
                    <button onClick={handlePost} className="post_button">POST</button>
                </div>

            </div>
            <div className="col-lg-3">

            </div>


        </div>
    );
};

export default AddReview;