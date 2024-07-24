const express = require('express');
const { getCartItems, addToCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/cart/:userId', getCartItems);
router.post('/cart/add', addToCart);

module.exports = router;