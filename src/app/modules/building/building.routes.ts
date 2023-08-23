import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { buildingController } from './building.controller';
import { buildingValidation } from './building.validation';

const router = express.Router();

router.get('/', buildingController.getAllFromDB);
router.get('/:id', buildingController.getOneFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(buildingValidation.create),
  buildingController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(buildingValidation.update),
  buildingController.updateOneInDB
);
router.delete('/:id', buildingController.deleteOneFromDB);

export const buildingRoutes = router;
