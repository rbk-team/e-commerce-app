const { Order, ShoppingCart } = require('../models');

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createOrder = async (req, res) => {
    const { city, street, deliveryDate, creditCardNumber, userId, shoppingCartId } = req.body;

    try {
        const order = await Order.create({
            city,
            street,
            deliveryDate,
            creditCardNumber,
            userId,
            shoppingCartId
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { city, street, deliveryDate, creditCardNumber } = req.body;

    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ error: 'Order not found' });

        order.city = city;
        order.street = street;
        order.deliveryDate = deliveryDate;
        order.creditCardNumber = creditCardNumber;

        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ error: 'Order not found' });

        await order.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};