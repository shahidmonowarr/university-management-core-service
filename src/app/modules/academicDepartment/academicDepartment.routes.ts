import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post('/', academicDepartmentController.insertIntoDB);

export const academicDepartmentRoutes = router;
