import express from 'express';
import { CoffeeController } from '../controller/coffee.controller.js';
const router = express.Router();

router.get('/:id', CoffeeController.findCoffee);
router.post('/', CoffeeController.createCoffee);
router.delete('/:id', CoffeeController.removeCoffee);

export default router;
