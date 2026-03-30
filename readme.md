# Personal Information 

Rahul Jaluthria
24BCY70054


---

# E-commerce Catalog API

A Node.js + MongoDB backend for managing an e-commerce product catalog with nested schemas, aggregation queries, and stock management.

---

## Features

* Nested schemas for products, variants, and reviews
* Add and manage product reviews
* Variant-based stock handling
* Aggregation queries for analytics
* Indexed fields for optimized queries

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## Project Structure

```
ecommerce-catalog/
│
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── utils/
│   └── stockManager.js
│
├── server.js
├── package.json
├── .env
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup environment variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
```

### 3. Run the server

```bash
node server.js
```

Server runs on:
`http://localhost:3000`

---

## API Endpoints

### Create Product

```
POST /api/products
```

### Add Review

```
POST /api/products/:id/review
```

### Get Product Stats (Aggregation)

```
GET /api/products/stats
```

### Get Stock Summary

```
GET /api/products/stock
```

---

## Sample Request

```json
{
  "name": "Shoes",
  "category": "Footwear",
  "price": 1999,
  "variants": [
    { "size": "8", "color": "Black", "stock": 10 },
    { "size": "9", "color": "White", "stock": 5 }
  ]
}
```

---

## Aggregation

* Average rating per product
* Total number of reviews
* Total stock across variants


