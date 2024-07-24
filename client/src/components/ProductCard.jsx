import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../components/CartContext'; 
import '../pages/Home/Hero.css'
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishList = () => {
    WishList(product);
  };

  return (
    <Card  className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Button style={{background:'white',border:'none',color:'black',fontSize:'25px'}} onClick={handleAddToWishList}><i class="fas fa-heart"></i>
       </Button>
      <Card.Body >
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Discount: {product.discount}%
        </Card.Text>
        <Button style={{ marginLeft:'70px',backgroundColor: 'black', color: 'white',border:'none' }} onClick={handleAddToCart}>Add to Cart</Button>    
        
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
