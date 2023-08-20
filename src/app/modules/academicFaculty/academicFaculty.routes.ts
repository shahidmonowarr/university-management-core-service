import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.get('/', academicFacultyController.getAllFromDB);
router.get('/:id', academicFacultyController.getDataById);
router.post(
  '/',
  validateRequest(academicFacultyValidation.create),
  academicFacultyController.insertIntoDB
);

export const academicFacultyRoutes = router;
