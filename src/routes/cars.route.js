import express from 'express';
import carsController from '../controllers/cars.controller.js';

const router = express.Router({ mergeParams: true });

router.route('/:_id').get(carsController.get);
router.route('/').get(carsController.getAll);

export default router;
