import { useState } from 'react';

function Products() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/150' },
  ]);

  return (
    <div style={styles.container}>
      <h2>Our Products</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button style={styles.button}>Add to Cart</button>
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