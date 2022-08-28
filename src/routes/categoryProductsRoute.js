import express from 'express';
import categoryProductsController from '../controllers/CategoryProductsController.js';

const router = express.Router({ mergeParams: true });

// Add missing feature
// un-comment this to implement two new routes
// accounts/:id/cars & accounts/:id/cars/:id2

router.route('/products').get(categoryProductsController.getAll);

router.route('/products/:id').get(categoryProductsController.get);

export default router;
