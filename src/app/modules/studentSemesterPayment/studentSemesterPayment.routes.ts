import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { studentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  studentSemesterPaymentController.getAllFromDB
);

export const studentSemesterPaymentRoutes = router;
