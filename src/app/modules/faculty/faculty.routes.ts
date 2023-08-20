import express from 'express';
import { facultyController } from './faculty.controller';

const router = express.Router();

router.post('/', facultyController.insertIntoDB);

export const facultyRoutes = router;
