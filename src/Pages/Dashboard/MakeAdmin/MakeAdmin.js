import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnSubmit = e => {

        fetch('http://localhost:5000/users/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Successfully Added ');
                    e.target.reset()
                    return;
                }
                if (data.matchedCount) {
                    alert('This email address already admin');
                    e.target.reset();
                    return;
                }
                if (data.modifiedCount === 0 && data.matchedCount === 0) {
                    alert('This email address is not user');
                    e.target.reset();
                    return;
                }
            })
        e.preventDefault();
    }
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email)
    }
    return (
        <div>
            <h4 className="text-center">Add Admin Member</h4>
            <div className="container row mx-auto">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-4">
                    <form onSubmit={handleOnSubmit} className="mini_make_add_container">
                        <input onBlur={handleEmail} className="my-3" type="email" placeholder="Write Email Address" required />
                        <input type="submit" value="Add Admin" />
                    </form>
                </div>
                <div className="col-lg-4">

                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;