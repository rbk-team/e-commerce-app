import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import CartContext from '../components/CartContext.jsx';
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
const FlashSales = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 60, discount: 44, image: img11 },
    { id: 2, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img12 },
    { id: 3, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img11 },
    { id: 4, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img12 },
    { id: 5, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img11 },
    { id: 6, name: 'AK-900 Wired Keyboard', price: 50, discount: 30, image: img12 },
  ];

  return (
    <div className="my-5">
      <h3>Flash Sales</h3>
      <div className="countdown mb-3">
        <span>03</span>:<span>23</span>:<span>19</span>:<span>56</span>
      </div>
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

export default FlashSales;
