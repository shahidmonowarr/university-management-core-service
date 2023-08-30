import express from 'express';
import { offeredCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

router.get('/', offeredCourseSectionController.getAllFromDB);
router.get('/:id', offeredCourseSectionController.getByIdFromDB);
router.post('/', offeredCourseSectionController.insertIntoDB);
router.patch('/:id', offeredCourseSectionController.updateOneInDB);
router.delete('/:id', offeredCourseSectionController.deleteByIdFromDB);

export const offeredCourseSectionRoutes = router;
