import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { courseService } from './course.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);

  const result = await courseService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Room created successfully',
    data: result,
  });
});

export const courseController = {
  insertIntoDB,
};
