import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="login_main_container">

            <div className="container row  mx-auto">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-4 text-center login_mini_form_container">
                    <img
                        src="https://i.ibb.co/DDfy6XH/logo-trang.png"
                        alt=""
                    />
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-2">

                        <input type="email" {...register("email", { required: true })} placeholder="Write Your Email" required />
                        <input type="password" {...register("password", { required: true })} placeholder="Write Your Password" required />




                        <input type="submit" value="Login" />
                    </form>
                    <NavLink to="/register" className="form_shift_link">New User ? Create Account.</NavLink>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default LogIn;