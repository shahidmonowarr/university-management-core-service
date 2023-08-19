import express from 'express';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-Semesters',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-Faculties',
    route: academicFacultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
