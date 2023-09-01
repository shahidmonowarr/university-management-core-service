import express from 'express';
import { offeredCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', offeredCourseClassScheduleController.getAllFromDB);
router.post('/', offeredCourseClassScheduleController.insertIntoDB);

export const offeredCourseClassScheduleRoutes = router;
