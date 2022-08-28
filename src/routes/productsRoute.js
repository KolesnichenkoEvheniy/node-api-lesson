import express from 'express';
import productsController from '../controllers/ProductsController.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(productsController.getAll);
router.route('/:id').get(productsController.get);

export default router;
