import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { offeredCourseSectionController } from './offeredCourseSection.controller';
import { offeredCourseSectionValidation } from './offeredCourseSection.validaton';

const router = express.Router();

router.get('/', offeredCourseSectionController.getAllFromDB);
router.get('/:id', offeredCourseSectionController.getByIdFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(offeredCourseSectionValidation.create),
  offeredCourseSectionController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(offeredCourseSectionValidation.update),
  offeredCourseSectionController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  offeredCourseSectionController.deleteByIdFromDB
);

export const offeredCourseSectionRoutes = router;
