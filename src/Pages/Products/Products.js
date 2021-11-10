import React from 'react';
import useAuth from './../../utilities/hooks/useAuth';
import SingleProduct from './../Shared/SingleProduct/SingleProduct';
import { Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigarion/Navigation';
import { Spinner } from 'react-bootstrap';

const Products = () => {
    const { products } = useAuth();
    return (
        <>
            <Navigation></Navigation>

            <div className="main_home_products_section">
                <div className="container pt-3 pb-5">
                    <h1 className="text-center mb-4 main_home_products_header">OUR PRODUCTS</h1>
                    {
                        products[1]?._id !== undefined && <Row xs={1} md={3} className="g-4">
                            {
                                products.map(product => <SingleProduct
                                    key={product?._id}
                                    product={product}
                                ></SingleProduct>)
                            }
                        </Row>
                    }
                    {

                        products[1]?._id === undefined && <div className="loading_spinner">
                            <Spinner animation="border" variant="info" />
                        </div>

                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Products;