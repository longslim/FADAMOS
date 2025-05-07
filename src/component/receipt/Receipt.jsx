import React from 'react';
import './receipt.css';
import { useNavigate } from 'react-router-dom';
import store_logo from "/store_logo.jpg"

const Receipt = ({ data }) => {
    const navigate = useNavigate()
  const handlePrint = () => {
    window.print();
    setTimeout(() => {
        navigate("/");
    }, 1000);
  };

  return (
    <div className="receipt">
      <div className='receipt_head'>
        <img src={store_logo} alt="" className=''/>
        <div className='receipt_header'>
            <h2>FADAMOS STORE</h2>
            <h2>Payment Receipt</h2>
        </div>
        <div className='receipt_heading'>
                <p><strong>Transaction ID:</strong> {data.transactionId}</p>
                <p><strong>Date:</strong> {data.date}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th><th>Qty</th><th>Price</th><th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Paid: ${data.total.toFixed(2)}</h3>
      <p>Thank you for shopping with us!</p>
      <div className='receipt_button'>
        <button onClick={handlePrint}>Print Receipt</button>
      </div>
    </div>
  );
};

export default Receipt;
