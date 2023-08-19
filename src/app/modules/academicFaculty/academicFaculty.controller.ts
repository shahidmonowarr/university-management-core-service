import { AcademicFaculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { academicFacultyService } from './academicFaculty.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await academicFacultyService.create(req.body);

  sendResponse<AcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created successfully',
    data: result,
  });
});

export const academicFacultyController = {
  insertIntoDB,
};
