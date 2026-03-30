const express = require('express');
const router = express.Router();

const {
    createProduct,
    addReview,
    getProductStats,
    getStockSummary
} = require('../controllers/productController');

router.post('/', createProduct);
router.post('/:id/review', addReview);

router.get('/stats', getProductStats);
router.get('/stock', getStockSummary);

module.exports = router;