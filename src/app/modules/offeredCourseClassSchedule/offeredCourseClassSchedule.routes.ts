import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { offeredCourseClassScheduleValidation } from './offerCourseClassSchedule.validation';
import { offeredCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', offeredCourseClassScheduleController.getAllFromDB);
router.get('/:id', offeredCourseClassScheduleController.getByIdFromDB);
router.post('/', offeredCourseClassScheduleController.insertIntoDB);

router.patch(
  '/:id',
  validateRequest(offeredCourseClassScheduleValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  offeredCourseClassScheduleController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  offeredCourseClassScheduleController.deleteByIdFromDB
);

export const offeredCourseClassScheduleRoutes = router;
