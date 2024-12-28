import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/products" style={styles.link}>Products</Link>
      <Link to="/cart" style={styles.link}>Cart</Link>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '1rem',
  }
};

export default Navbar;
