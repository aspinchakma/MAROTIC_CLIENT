import { Alert } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import useAuth from './../../utilities/hooks/useAuth';
import Navigation from './../Shared/Navigarion/Navigation';
import { useHistory } from 'react-router-dom'
import './Register.css';

const Register = () => {
    const { handleCreateAccount, setError, error } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.password1 !== data.password2) {
            setError('Do not matched password')
            return;
        }
        handleCreateAccount(data.name, data.email, data.password1, history);
        reset();

    };
    return (
        <div className="register_form">
            <Navigation></Navigation>
            <div className="container row  mx-auto mini_register_container ">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-4 text-center login_mini_form_container ">
                    <img
                        src="https://i.ibb.co/DDfy6XH/logo-trang.png"
                        alt=""
                    />
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
                        <input type="text" {...register("name", { required: true })} placeholder="Full Name" required />

                        <input type="email" {...register("email", { required: true })} placeholder="Email" required />

                        <input type="password" {...register("password1", { required: true })} placeholder="Password" required />
                        <input type="password" {...register("password2", { required: true })} placeholder="Re-type Password" required />




                        <input type="submit" value="Register" />
                    </form>
                    <NavLink to="/login" className="form_shift_link">Already have an account ?</NavLink>

                    {
                        error.length > 0 && <Alert severity="error">

                            {error}
                        </Alert>
                    }

                </div>
                <div className="col-lg-4">

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;