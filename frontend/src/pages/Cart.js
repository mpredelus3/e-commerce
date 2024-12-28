import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.length;

  return (
    <div style={styles.container}>
      <h2>Shopping Cart ({total} items)</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button 
                style={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  image: {
    width: '100px',
    height: 'auto',
    marginRight: '1rem',
  },
  itemInfo: {
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Cart;
