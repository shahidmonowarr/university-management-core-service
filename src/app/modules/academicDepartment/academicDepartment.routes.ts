import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.get('/', academicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartmentController.getDataById);

router.post(
  '/',
  validateRequest(academicDepartmentValidation.create),
  academicDepartmentController.insertIntoDB
);

export const academicDepartmentRoutes = router;
