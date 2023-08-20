import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.post('/', studentController.insertIntoDB);

export const studentRoutes = router;
