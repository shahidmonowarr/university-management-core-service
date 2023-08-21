import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
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
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(academicFacultyValidation.update),
  academicFacultyController.updateById
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  academicFacultyController.deleteById
);

export const academicFacultyRoutes = router;
