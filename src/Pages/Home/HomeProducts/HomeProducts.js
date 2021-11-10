import React from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import useAuth from './../../../utilities/hooks/useAuth';
import './HomeProduct.css';
import { Spinner } from 'react-bootstrap';

const HomeProducts = () => {
    const { products } = useAuth();
    const homeProducts = [];
    for (let i = 0; i < 6; i++) {
        homeProducts.push(products[i]);
    }

    return (
        <div className="main_home_products_section">
            <div className="container pt-4 pb-5">
                <h1 className="text-center mb-4 main_home_products_header">POPULAR IN STORE</h1>
                {
                    homeProducts[1]?._id !== undefined && <Row xs={1} md={3} className="g-4">
                        {
                            homeProducts.map(product => <SingleProduct
                                key={product?._id}
                                product={product}
                            ></SingleProduct>)
                        }
                    </Row>
                }
                {

                    homeProducts[1]?._id === undefined && <div className="loading_spinner">
                        <Spinner animation="border" variant="info" />
                    </div>

                }
                {
                    homeProducts[1]?._id !== undefined && <div className="text-center mt-4">
                        <NavLink to="/products"><button className="see_more_products_button">SEE MORE</button></NavLink>

                    </div>
                }

            </div>
        </div>

    );
};

export default HomeProducts;