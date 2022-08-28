import express from 'express';
import categoriesController from '../controllers/CategoriesController.js';
import categoryProductsRoute from './categoryProductsRoute.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(categoriesController.getAll);

router.route('/:id').get(categoriesController.get);

router.use('/:CategoryId', categoryProductsRoute);

export default router;
