import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { roomController } from './room.controller';
import { roomValidation } from './room.validation';

const router = express.Router();

router.get('/', roomController.getAllFromDB);
router.get('/:id', roomController.getOneFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(roomValidation.create),
  roomController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(roomValidation.update),
  roomController.updateOneInDB
);
router.delete('/:id', roomController.deleteOneFromDB);

export const roomRoutes = router;
