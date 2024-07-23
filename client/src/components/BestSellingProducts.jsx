import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const BestSellingProducts = () => {
    const products = [
        { id: 1, name: 'The north coat', price: 380, discount: 250, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Gucci duffle bag', price: 1500, discount: 950, image: 'https://via.placeholder.com/150' },
        // Add more products as needed
    ];

    return (
        <div className="my-5">
            <h3>Best Selling Products</h3>
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

export default BestSellingProducts;
