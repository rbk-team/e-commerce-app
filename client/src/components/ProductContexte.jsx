// src/components/ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [details, setDetails] = useState(null);

  const showDetails = (product) => {
    setDetails(product);
  };

  return (
    <ProductContext.Provider value={{ details, showDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
