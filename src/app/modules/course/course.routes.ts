import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { courseController } from './course.controller';
import { courseValidation } from './course.validation';

const router = express.Router();

router.get('/', courseController.getAllFromDB);
router.get('/:id', courseController.getByIdFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(courseValidation.create),
  courseController.insertIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  courseController.deleteByIdFromDB
);

export const courseRoutes = router;
