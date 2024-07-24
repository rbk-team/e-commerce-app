import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import CartContext from '../components/CartContext.jsx';
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'

const OurProducts = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 60 , discount: 44, image: img11 },
    { id: 2, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img12 },
    { id: 3, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img13 },
    { id: 4, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img14 },
    { id: 2, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img12 },
    { id: 4, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img14 },
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 60 , discount: 44, image: img11 },
    { id: 3, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img13 },
   

  ];
  
  return (
    
    <div className="my-5">
     
      <div className="countdown mb-3">
     <h3>Our Products</h3>
      </div>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
            
          </Col>
        ))}
      </Row>
      <p className='line'>________________________________________________________________________________________________________________________________________</p>
          </div>
  );
};

export default OurProducts;
