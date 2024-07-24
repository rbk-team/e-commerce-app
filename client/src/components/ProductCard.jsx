// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../components/CartContext'; 
import ProductContext from '../components/ProductContexte.jsx';
import '../Pages/Home/Hero.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { showDetails } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleMore = () => {
    showDetails(product);
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Button style={{ background: 'white', border: 'none', color: 'black', fontSize: '25px' }}>
        <i className="fas fa-heart"></i>
      </Button>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Discount: {product.discount}%
        </Card.Text>
        <Button style={{ marginLeft: '70px', backgroundColor: 'black', color: 'white', border: 'none' }} onClick={handleAddToCart}>Add to Cart</Button>
        <Button style={{ marginLeft: '70px', backgroundColor: 'black', color: 'white', border: 'none' }} onClick={handleMore}>More...</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
