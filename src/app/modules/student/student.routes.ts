import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentController } from './student.controller';
import { studentValidation } from './student.validation';

const router = express.Router();

router.get('/', studentController.getAllFromDB);
router.get('/:id', studentController.getDataById);
router.post(
  '/',
  validateRequest(studentValidation.create),
  studentController.insertIntoDB
);

export const studentRoutes = router;
