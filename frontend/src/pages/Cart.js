function Cart() {
  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      <p>Your cart is empty</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
  }
};

export default Cart;
