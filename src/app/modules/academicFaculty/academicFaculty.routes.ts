import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', academicFacultyController.getAllFromDB);
router.get('/:id', academicFacultyController.getDataById);
router.post('/', academicFacultyController.insertIntoDB);

export const academicFacultyRoutes = router;
