const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});