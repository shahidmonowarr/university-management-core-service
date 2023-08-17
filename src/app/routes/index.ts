import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-Semesters',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
