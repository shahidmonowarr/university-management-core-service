import express from 'express';
import { semesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.get('/', semesterRegistrationController.getAllFromDB);
router.get('/:id', semesterRegistrationController.getOneFromDB);
router.post('/', semesterRegistrationController.insertIntoDB);

export const semesterRegistrationRoutes = router;
