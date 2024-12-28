const router = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get user's cart
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json(user.cart || []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add item to cart
router.post('/add', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.cart = user.cart || [];
    user.cart.push(req.body.productId);
    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove item from cart
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.cart = user.cart.filter(id => id !== req.params.productId);
    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
