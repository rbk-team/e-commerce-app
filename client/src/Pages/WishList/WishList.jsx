import React, { useContext } from 'react';
import WishlistContext from '../../components/WishListContex';
import { Card, Button } from 'react-bootstrap';

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Price: ${product.price} <br />
                Discount: {product.discount}%
              </Card.Text>
              {/* Add additional product details or actions if needed */}
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
