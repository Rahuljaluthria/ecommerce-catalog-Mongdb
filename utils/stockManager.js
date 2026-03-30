const Product = require('../models/Product');

// Reduce stock
exports.updateStock = async (productId, variantId, quantity) => {
    const product = await Product.findById(productId);

    const variant = product.variants.id(variantId);

    if (!variant) throw new Error("Variant not found");

    if (variant.stock < quantity) {
        throw new Error("Insufficient stock");
    }

    variant.stock -= quantity;
    await product.save();

    return product;
};