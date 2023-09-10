import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { studentEnrolledCourseMarkService } from './studentEnrolledCourseMark.service';

const updateStudentMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await studentEnrolledCourseMarkService.updateStudentMarks(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student marks updated successfully',
    data: result,
  });
});

export const studentEnrolledCourseMarkController = {
  updateStudentMarks,
};
