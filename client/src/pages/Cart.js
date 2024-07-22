import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { fetchCart } from '../services/api'; // Ensure this import is correct

const Cart = () => {
    const { userId } = useParams(); // Assuming userId is passed as a param
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            try {
                const response = await fetchCart(userId);
                setCartItems(response.data.productCarts);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        getCartItems();
    }, [userId]);

    const removeFromCartHandler = (productId) => {
        // Remove item from cart
    };

    const checkoutHandler = () => {
        // Handle checkout
    };

    return (
        <div className="my-5">
            <Row>
                <Col md={8}>
                    <h3>Shopping Cart</h3>
                    {cartItems.length === 0 ? (
                        <h5>Your cart is empty</h5>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.product.img} alt={item.product.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            {item.product.name}
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.productId)}>
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h4>Subtotal ({cartItems.length}) items</h4>
                                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type="button" className="btn-block" onClick={checkoutHandler}>
                                    Proceed To Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;
