import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post('/', academicFacultyController.insertIntoDB);

export const academicFacultyRoutes = router;
