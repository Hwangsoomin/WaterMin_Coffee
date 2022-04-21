import express from 'express';
import { CoffeeController } from '../controller/coffee.controller.js';
const router = express.Router();

router.post('/', CoffeeController.createCoffee);

export default router;
