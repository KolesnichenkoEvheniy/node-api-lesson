import express from 'express';
import categoryProductsController from '../controllers/CategoryProductsController.js';

const router = express.Router({ mergeParams: true });

router.route('/products').get(categoryProductsController.getAll);

router.route('/products/:id').get(categoryProductsController.get);

export default router;
