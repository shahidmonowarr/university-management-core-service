import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { facultyController } from './faculty.controller';
import { facultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', facultyController.getAllFromDB);
router.get(
  '/my-courses',
  auth(ENUM_USER_ROLE.FACULTY),
  facultyController.myCourses
);
router.get(
  '/my-course-students',
  auth(ENUM_USER_ROLE.FACULTY),
  facultyController.getMyCourseStudents
);
router.get('/:id', facultyController.getDataById);

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(facultyValidation.create),
  facultyController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(facultyValidation.update),
  facultyController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  facultyController.deleteFromDB
);

router.post(
  '/:id/assign-courses',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(facultyValidation.assignOrRemoveCourses),
  facultyController.assignCourses
);
router.delete(
  '/:id/remove-courses',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(facultyValidation.assignOrRemoveCourses),
  facultyController.removeCourses
);

export const facultyRoutes = router;
