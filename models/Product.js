const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: String,
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    date: { type: Date, default: Date.now }
});

const variantSchema = new mongoose.Schema({
    size: String,
    color: String,
    stock: { type: Number, default: 0 }
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    category: { type: String, index: true },
    price: Number,

    variants: [variantSchema],   // Nested schema
    reviews: [reviewSchema],     // Nested schema

    createdAt: { type: Date, default: Date.now }
});

// 📊 Index optimization
productSchema.index({ name: "text", category: 1 });

// ⭐ Virtual for average rating
productSchema.virtual('averageRating').get(function () {
    if (this.reviews.length === 0) return 0;
    const total = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return total / this.reviews.length;
});

module.exports = mongoose.model('Product', productSchema);