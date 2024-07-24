const { Product } = require('../models');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const { name, price, img, categoryId } = req.body;

    try {
        const product = await Product.create({ name, price, img, categoryId });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, img, categoryId } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        product.name = name;
        product.price = price;
        product.img = img;
        product.categoryId = categoryId;

        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }const { Product } = require('../models');

    exports.getProducts = async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    
    exports.createProduct = async (req, res) => {
        const { name, price, img, categoryId } = req.body;
    
        try {
            const product = await Product.create({ name, price, img, categoryId });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    
    exports.getProductById = async (req, res) => {
        const { id } = req.params;
    
        try {
            const product = await Product.findByPk(id);
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    
    exports.updateProduct = async (req, res) => {
        const { id } = req.params;
        const { name, price, img, categoryId } = req.body;
    
        try {
            const product = await Product.findByPk(id);
            if (!product) return res.status(404).json({ error: 'Product not found' });
    
            product.name = name;
            product.price = price;
            product.img = img;
            product.categoryId = categoryId;
    
            await product.save();
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    
    exports.deleteProduct = async (req, res) => {
        const { id } = req.params;
    
        try {
            const product = await Product.findByPk(id);
            if (!product) return res.status(404).json({ error: 'Product not found' });
    
            await product.destroy();
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        await product.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
