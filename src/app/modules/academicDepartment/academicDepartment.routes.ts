import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', academicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartmentController.getDataById);

router.post('/', academicDepartmentController.insertIntoDB);

export const academicDepartmentRoutes = router;
