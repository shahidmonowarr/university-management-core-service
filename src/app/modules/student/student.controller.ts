import { Student } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { studentService } from './student.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await studentService.insertIntoDB(req.body);

  sendResponse<Student>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Created successfully',
    data: result,
  });
});

export const studentController = {
  insertIntoDB,
};
