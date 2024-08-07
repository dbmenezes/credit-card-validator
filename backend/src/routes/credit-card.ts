import { Router } from 'express';
import  validateCreditCardController  from '../controllers/credit-card/credit-card';

const router = Router();

router.post('/payment/validate-card-number', validateCreditCardController);

export default router;