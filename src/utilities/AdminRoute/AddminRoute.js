import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {

    const { isAdmin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="loading_spinner">
            <Spinner animation="border" variant="info" />
        </div>
    }
    console.log(isAdmin)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;