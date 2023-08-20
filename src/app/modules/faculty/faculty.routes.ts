import express from 'express';
import { facultyController } from './faculty.controller';

const router = express.Router();

router.get('/', facultyController.getAllFromDB);
router.get('/:id', facultyController.getDataById);
router.post('/', facultyController.insertIntoDB);

export const facultyRoutes = router;
