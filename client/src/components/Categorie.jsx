import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../Pages/Home/Hero.css'
const Categories = () => {
    const categories = [
        { name: 'FREE AND FAST DELIVERY', icon: ' fas fa-truck' },
        { name: '24/7 CUSTOMER SERVICE', icon: 'fas fa-headphones-alt' },
        { name: 'MONEY BACK GUARANTEE', icon: 'fas fa-user-shield' },
       
        
    ];

    return (
        <div className="my-5">
       
            <Row className='row'>
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
