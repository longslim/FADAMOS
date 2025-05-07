import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './cartIcon.css'; 

const CartIcon = () => {
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart_icon" onClick={() => navigate('/cart')}>
      <FiShoppingCart size={24} />
      {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
    </div>
  );
};

export default CartIcon;
