import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { offeredCourseController } from './offeredCourse.controller';
import { offeredCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.get('/', offeredCourseController.getAllFromDB);
router.get('/:id', offeredCourseController.getByIdFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(offeredCourseValidation.create),
  offeredCourseController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(offeredCourseValidation.update),
  offeredCourseController.updateOneInDB
);

export const offeredCourseRoutes = router;
