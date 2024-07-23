// ProductCard.jsx
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../components/CartContext'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="my-3">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Discount: {product.discount}%
        </Card.Text>
        <Button onClick={handleAddToCart}>Add to Cart</Button>    
        
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
