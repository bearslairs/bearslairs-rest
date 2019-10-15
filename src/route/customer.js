import express from 'express';
import CustomerController from '../controller/customer';

const customerRouter = express.Router();
customerRouter.post('/', CustomerController.create);
export default customerRouter;