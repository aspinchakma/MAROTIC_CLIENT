import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './ProductCategories.css';

const ProductCategory = () => {
    return (
        <div className="main_categories_section py-5">
            <div className="container">

                <h2 className="text-center text-white">Product categories</h2>
                <Row xs={1} md={5} className="g-4">
                    <Col>
                        <Card className="categories_card  py-2 mini_categories_container">
                            <Card.Img variant="top"
                                src="https://i.ibb.co/c8bK64S/Watch5-500x.png" />
                            <Card.Body>
                                <Card.Title className="categories_name">Black Dial</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="categories_card py-2 mini_categories_container">
                            <Card.Img variant="top"
                                src="https://i.ibb.co/PTRYWvL/Watch6-500x.png" />
                            <Card.Body>
                                <Card.Title className="categories_name"> Timzee Scientific </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="categories_card  py-2 mini_categories_container">
                            <Card.Img variant="top"
                                src="https://i.ibb.co/fQgFQCn/Watch9-500x.png" />
                            <Card.Body>
                                <Card.Title className="categories_name"> Gold Case</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="categories_card  py-2 mini_categories_container">
                            <Card.Img variant="top"
                                src="https://i.ibb.co/Ltxwqfb/Watch20-500x.png" />
                            <Card.Body>
                                <Card.Title className="categories_name">Curved Design</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="categories_card py-2 mini_categories_container">
                            <Card.Img variant="top"
                                src="https://i.ibb.co/3NQqnCV/Watch21-500x.png" />
                            <Card.Body>
                                <Card.Title className="categories_name"> Silver Case</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default ProductCategory;