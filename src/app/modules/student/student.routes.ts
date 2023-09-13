import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { studentController } from './student.controller';
import { studentValidation } from './student.validation';

const router = express.Router();

router.get('/', studentController.getAllFromDB);
router.get(
  '/my-courses',
  auth(ENUM_USER_ROLE.STUDENT),
  studentController.myCourses
);
router.get('/:id', studentController.getDataById);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(studentValidation.update),
  studentController.updateIntoDB
);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(studentValidation.create),
  studentController.insertIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  studentController.deleteFromDB
);

export const studentRoutes = router;
