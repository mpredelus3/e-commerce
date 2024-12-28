import { useState } from 'react';
import { useCart } from '../context/CartContext';
import product14 from '../components/Assets/product_14.png';
import product27 from '../components/Assets/product_27.png';
import product17 from '../components/Assets/product_17.png';
import exclusiveImage from '../components/Assets/exclusive_image.png';
import heroImage from '../components/Assets/hero_image.png';

function Products() {
  const { addToCart } = useCart();
  const [products] = useState([
    { id: 1, name: 'T-Shirt', price: 'TBA', image: exclusiveImage },
    { id: 2, name: 'Jeans', price: 'TBA', image: product17 },
    { id: 3, name: 'Hoodie', price: 'TBA', image: product27 },
    { id: 4, name: 'Sneakers', price: 'TBA', image: heroImage },
    { id: 5, name: 'Cap', price: 'TBA', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jacket', price: 'TBA', image: product14 }
  ]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div style={styles.container}>
      <h2>Our Products</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button 
              style={styles.button}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  }
};

export default Products; 