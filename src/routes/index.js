import {Router} from 'express';
import productsController from '../controllers/productsController.js';

const router = Router();

router.route('/products').get(productsController.getAll);
router.route('/products').post(productsController.add);

export default router;