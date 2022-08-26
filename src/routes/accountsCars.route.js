import express from 'express';
import accountsCarsController from '../controllers/accountsCars.controller.js';

const router = express.Router({ mergeParams: true });

// Add missing feature
// un-comment this to implement two new routes
// accounts/:id/cars & accounts/:id/cars/:id2

router.route('/cars').get(accountsCarsController.getAll);

router.route('/cars/:_id').get(accountsCarsController.get);

export default router;
