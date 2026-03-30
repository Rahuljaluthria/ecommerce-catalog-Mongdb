const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
};

// Add Review
exports.addReview = async (req, res) => {
    const product = await Product.findById(req.params.id);

    product.reviews.push(req.body);
    await product.save();

    res.json(product);
};

// 📊 Aggregation: Average rating per product
exports.getProductStats = async (req, res) => {
    const stats = await Product.aggregate([
        {
            $unwind: "$reviews"
        },
        {
            $group: {
                _id: "$name",
                avgRating: { $avg: "$reviews.rating" },
                totalReviews: { $sum: 1 }
            }
        }
    ]);

    res.json(stats);
};

// 📊 Aggregation: Total stock per product
exports.getStockSummary = async (req, res) => {
    const stock = await Product.aggregate([
        {
            $unwind: "$variants"
        },
        {
            $group: {
                _id: "$name",
                totalStock: { $sum: "$variants.stock" }
            }
        }
    ]);

    res.json(stock);
};