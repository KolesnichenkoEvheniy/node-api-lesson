import express from 'express';
import carsController from '../controllers/cars.controller.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(carsController.getAll);
router.route('/:_id').get(carsController.get);

export default router;
