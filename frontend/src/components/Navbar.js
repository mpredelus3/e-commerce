import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

function Navbar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const { cartCount } = useCart();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.leftLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
      </div>
      <div style={styles.rightLinks}>
        {currentUser ? (
          <div style={styles.userSection}>
            <span style={styles.username}>Welcome, {currentUser.username}</span>
            <button onClick={handleLogout} style={styles.authLink}>Logout</button>
          </div>
        ) : (
          <div style={styles.authSection}>
            <Link to="/login" style={styles.authLink}>Login</Link>
            <Link to="/signup" style={styles.authLink}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftLinks: {
    display: 'flex',
    gap: '1rem',
  },
  rightLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  authSection: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  authLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    border: '1px solid white',
    borderRadius: '4px',
    cursor: 'pointer',
    background: 'none',
  },
  username: {
    color: 'white',
  }
};

export default Navbar;
