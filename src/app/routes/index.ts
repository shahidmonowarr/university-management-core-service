import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse..routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentRoutes } from '../modules/student/student.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';

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
  {
    path: '/academic-Departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/buildings',
    route: buildingRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/offered-course-sections',
    route: offeredCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedules',
    route: offeredCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    route: studentEnrolledCourseMarkRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
