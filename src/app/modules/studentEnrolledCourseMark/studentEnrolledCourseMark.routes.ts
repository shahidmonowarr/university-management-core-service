import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { studentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  studentEnrolledCourseMarkController.getAllFromDB
);

router.patch(
  '/update-marks',
  studentEnrolledCourseMarkController.updateStudentMarks
);

export const studentEnrolledCourseMarkRoutes = router;
