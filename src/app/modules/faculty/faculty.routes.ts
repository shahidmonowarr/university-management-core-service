import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { facultyController } from './faculty.controller';
import { facultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', facultyController.getAllFromDB);
router.get('/:id', facultyController.getDataById);
router.post(
  '/',
  validateRequest(facultyValidation.create),
  facultyController.insertIntoDB
);

export const facultyRoutes = router;
