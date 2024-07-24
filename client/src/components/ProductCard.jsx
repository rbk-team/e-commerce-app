import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../components/CartContext'; 
import WishlistContext from './WishListContex';
import '../Pages/Home/Hero.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
 
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishList = () => {
    addToWishlist(product);
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Button style={{ background: 'white', border: 'none', color: 'black', fontSize: '25px' }} onClick={handleAddToWishList}>
        <i className="fas fa-heart"></i>
      </Button>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Discount: {product.discount}%
        </Card.Text>
        <Button style={{ marginLeft: '70px', backgroundColor: 'black', color: 'white', border: 'none' }} onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Link to={`/product/${product.id}`} className="btn btn-primary" style={{ marginLeft: '55px', marginTop:'12px' }}>
                Product Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
