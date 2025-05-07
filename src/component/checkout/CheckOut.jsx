import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Receipt from '../receipt/Receipt';
import "./checkOut.css"

import { toast } from 'react-toastify';


const CheckOut = () => {
    const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  const handlePayment = () => {
    const transactionId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const date = new Date().toLocaleString();
    setTransactionData({ transactionId, date, items: cart, total: totalPrice });
    setShowReceipt(true);
    clearCart();
    toast.success('Payment successful! Receipt generated.', {
        position: "top-right",
        autoClose: 3000,
      });
  };

  if (showReceipt) {
    return <Receipt data={transactionData}/>;
  }

  return (
    <div className="checkout_page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="checkout_item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="details">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity_controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove_btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="checkout_summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="pay_btn" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
