import React, { useEffect, useState, useContext } from 'react';
import './productContainer.css';
import ProductCard from './ProductCard';
import { CartContext } from '../../component/context/CartContext';
import { toast } from 'react-toastify';


const ProductContainer = () => {
  const [allProducts, setAllProducts] = useState([]); 
  const [store, setStore] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const getProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setAllProducts(data);
      groupProducts(data);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const groupProducts = (products) => {
    const grouped = products.reduce((acc, item) => {
      acc[item.category] = acc[item.category]
        ? [...acc[item.category], item]
        : [item];
      return acc;
    }, {});
    setStore(grouped);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    groupProducts(filtered);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product_container">
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {Object.entries(store).map(([category, products]) => (
        <div key={category} className="category_group">
          <h2>{category.toUpperCase()}</h2>
          <div className="category_products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {
                  addToCart(product);
                  toast.success(`${product.title} added to cart!`);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
