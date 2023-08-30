import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { offeredCourseController } from './offeredCourse.controller';
import { offeredCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(offeredCourseValidation.create),
  offeredCourseController.insertIntoDB
);

export const offeredCourseRoutes = router;
