import express from 'express';
import Coffee from './coffee.route.js';
const router = express.Router();

router.use('/coffee', Coffee);

export default router;
