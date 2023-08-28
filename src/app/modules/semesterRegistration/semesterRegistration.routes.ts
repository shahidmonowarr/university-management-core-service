import express from 'express';
import { semesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.get('/', semesterRegistrationController.getAllFromDB);
router.get('/:id', semesterRegistrationController.getOneFromDB);
router.post('/', semesterRegistrationController.insertIntoDB);
router.patch('/:id', semesterRegistrationController.updateOneInDB);
router.delete('/:id', semesterRegistrationController.deleteOneFromDB);

export const semesterRegistrationRoutes = router;
