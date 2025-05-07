import React from 'react';
import './productCard.css';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    

    <div className="product_card">
        <NavLink className='cards' to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price.toFixed(2)}</p>
        </NavLink>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
    
  );
};

export default ProductCard;
