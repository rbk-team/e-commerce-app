import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../../src/services/api.js';

const ProductCard = ({ product, userId }) => {
    const handleAddToCart = async () => {
        try {
            await addToCart(userId, product.id, 1);
            alert('Product added to cart!'); 
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <Card className="my-3 p-3 rounded">
            <Card.Img src={product.img} />
            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    ${product.price} {product.oldPrice && <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>}
                </Card.Text>
                <Button onClick={handleAddToCart}>Add To Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
