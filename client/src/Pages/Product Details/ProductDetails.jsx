// src/Pages/ProductDetails/ProductDetails.js
import React, { useContext } from 'react';
import ProductContext from '../../components/ProductContexte.jsx';
import './product.css';

const ProductDetails = () => {
  const { details } = useContext(ProductContext);

  if (!details) {
    return <p>No product selected</p>;
  }

  return (
    <div className="product-details">
      <img src={details.image} alt={details.name} />
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <p>Price: {details.price}</p>
      <p>Colors: {details.colors.join(', ')}</p>
      <p>Sizes: {details.sizes.join(', ')}</p>
    </div>
  );
};

export default ProductDetails;
