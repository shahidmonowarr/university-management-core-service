import express from 'express';
import { buildingController } from './building.controller';

const router = express.Router();

router.get('/', buildingController.getAllFromDB);
router.post('/', buildingController.insertIntoDB);

export const buildingRoutes = router;
