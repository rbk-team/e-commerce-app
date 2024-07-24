const { ShoppingCart, ProductCart, Product } = require('../models');

const getCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await ShoppingCart.findOne({
            where: { userId },
            include: [
                {
                    model: ProductCart,
                    include: [Product]
                }
            ]
        });
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
};

const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const cart = await ShoppingCart.findOrCreate({ where: { userId } });
        const cartId = cart[0].id;

        const [productCart, created] = await ProductCart.findOrCreate({
            where: { shoppingCartId: cartId, productId },
            defaults: { quantity, price: 0 }
        });

        if (!created) {
            productCart.quantity += quantity;
            await productCart.save();
        }

        res.status(201).json(productCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
};

module.exports = {
    getCartItems,
    addToCart
};