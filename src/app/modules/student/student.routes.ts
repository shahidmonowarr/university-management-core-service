import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.get('/', studentController.getAllFromDB);
router.get('/:id', studentController.getDataById);
router.post('/', studentController.insertIntoDB);

export const studentRoutes = router;
