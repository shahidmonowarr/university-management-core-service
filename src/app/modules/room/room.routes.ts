import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { roomController } from './room.controller';
import { roomValidation } from './room.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(roomValidation.create),
  roomController.insertIntoDB
);

export const roomRoutes = router;
