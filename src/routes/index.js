import express from 'express';
import products from '../controllers/products.js';

const router = express.Router();

router.get('/products', products.productsList)
router.post('/products', products.addNew)

export default router;