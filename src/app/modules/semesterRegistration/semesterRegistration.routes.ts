import express from 'express';
import { semesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.post('/', semesterRegistrationController.insertIntoDB);

export const semesterRegistrationRoutes = router;
