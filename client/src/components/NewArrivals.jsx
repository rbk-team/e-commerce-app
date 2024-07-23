import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const NewArrivals = () => {
    const products = [
        { id: 1, name: 'PlayStation 5', price: 499, discount: 0, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Women\'s Collections', price: 200, discount: 0, image: 'https://via.placeholder.com/150' },
        // Add more products as needed
    ];

    return (
        <div className="my-5">
            <h3>New Arrival</h3>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
            <Button className="mt-3" variant="primary">View All Products</Button>
        </div>
    );
};

export default NewArrivals;
