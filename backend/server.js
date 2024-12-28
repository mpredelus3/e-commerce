const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes (we'll add these next)
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));

// Add this after your other routes
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// Test product route
app.post('/api/products/test', async (req, res) => {
  try {
    const testProduct = new Product({
      name: "Test T-Shirt",
      price: "TBA",
      image: "product_14.png"
    });
    
    const savedProduct = await testProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
