import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import CartContext from '../../components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const CardPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getAll');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container >
      <Row xs={1} md={2} lg={3} className="g-4">
        {cart.map(item => (
          <Col key={item.id}>
            <Card style={{ width: '20rem' }}>
              <Card.Img className='Container' variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                  <br />
                  <strong className='price'>{item.price}</strong>
                  <br />
                  Quantity: {item.quantity}
                </Card.Text>
                <ButtonGroup className="mb-2">
                  <Button className='bt1' variant="danger" onClick={() => decrementQuantity(item.id)}>-</Button>
                  <Button className='bt2' variant="success" onClick={() => incrementQuantity(item.id)}>+</Button>
                </ButtonGroup>
                <Button className='btR' variant="primary" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardPage;
