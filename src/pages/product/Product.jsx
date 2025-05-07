import React, { useContext, useEffect, useState } from 'react';
import "./product.css";
import { useParams } from 'react-router-dom';
import { CartContext } from '../../component/context/CartContext';
import { toast } from 'react-toastify';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  if (!product.id) return <p>Loading product...</p>;

  return (
    <div className="productss">
      <div className="detailss">
        <img src={product.image} alt={product.title} />
        <div className="productss_details">
          <h2>{product.title}</h2>
          <h4>${product.price?.toFixed(2)}</h4>
          <h5>Rating: {product.rating?.rate || 'N/A'}</h5>
          <p><strong>Description:</strong> {product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default Product;
