import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="cart_empty">Your cart is empty.</div>;
  }


  const navigate = useNavigate()

  return (
    <div className="cart_container">
      <h2>Your Cart</h2>
      <div className='cart_product'>
            {cart.map((item) => (
                <div key={item.id} className="cart_item">
                <img src={item.image} alt={item.title} />
                <div className="item_info">
                    <h4>{item.title}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} >-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} >+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove">
                    Remove
                    </button>
                </div>
                </div>
            ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button 
        className="checkout_btn"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
