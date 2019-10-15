import express from 'express';
import customerRouter from './customerRouter';

const router = express.Router();

router.use(express.json());
router.use('/customer', customerRouter);

export default router;