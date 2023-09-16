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

router.get(
  '/my-marks',
  auth(ENUM_USER_ROLE.STUDENT),
  studentEnrolledCourseMarkController.getMyCourseMarks
);

router.patch(
  '/update-marks',
  studentEnrolledCourseMarkController.updateStudentMarks
);
router.patch(
  '/update-final-marks',
  studentEnrolledCourseMarkController.updateFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
