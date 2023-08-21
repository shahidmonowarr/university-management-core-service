import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', academicSemesterController.getAllFromDB);

router.get('/:id', academicSemesterController.getDataById);

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(academicSemesterValidation.create),
  academicSemesterController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(academicSemesterValidation.update),
  academicSemesterController.updateById
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  academicSemesterController.deleteById
);

export const academicSemesterRoutes = router;
