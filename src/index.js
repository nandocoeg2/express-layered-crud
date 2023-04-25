const dotenv = require('dotenv');
const express = require('express');
const { PrismaClient } = require('@prisma/client');

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Express API is running on port ${PORT}.`);
});

app.get('/api', (req, res) => {
    res.send('Hello from the Express API');
});

const productController = require('./products/product.controller');
app.use('/products', productController);