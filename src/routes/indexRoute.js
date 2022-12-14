import express from 'express';
import products from './productsRoute.js';
import categories from './categoriesRoute.js';
import RandomController from '../controllers/RandomController.js';
import checkToken from '../core/middleware/auth/checkToken.js';
import { availableTokens } from '../config.js';

const router = express.Router();

router.use('/products', products);
router.use('/categories', categories);

router.get('/', (req, res) => {
  res.json({
    message: 'Sample Node API Version',
  });
});

router.get('/random', checkToken(availableTokens), RandomController.getRandom);

export default router;
