import express from 'express';
import products from './productsRoute.js';
import categories from './categoriesRoute.js';

const router = express.Router();

router.use('/products', products);
router.use('/categories', categories);

router.get('/', (req, res) => res.send('Sample Node API Version'));

export default router;
