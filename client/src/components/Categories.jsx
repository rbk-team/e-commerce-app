import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Categories = () => {
    const categories = [
        { name: 'Phones', icon: 'fa-mobile-alt' },
        { name: 'Computers', icon: 'fa-laptop' },
        { name: 'SmartWatch', icon: 'fa-watch' },
        { name: 'Camera', icon: 'fa-camera' },
        { name: 'HeadPhones', icon: 'fa-headphones' },
        { name: 'Gaming', icon: 'fa-gamepad' },
        
    ];

    return (
        <div className="my-5">
            <h3>Browse By Category</h3>
            <Row>
                {categories.map((category, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={2}>
                        <Card className="text-center my-3 p-3 rounded">
                            <i className={`fas ${category.icon} fa-2x`}></i>
                            <Card.Body>
                                <Card.Title as="div">
                                    <strong>{category.name}</strong>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Categories;
