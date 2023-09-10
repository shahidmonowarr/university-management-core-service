import express from 'express';
import { studentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/', studentSemesterPaymentController.getAllFromDB);

export const studentSemesterPaymentRoutes = router;
