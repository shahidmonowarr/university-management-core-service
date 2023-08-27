import { Faculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  facultyFilterableFields,
  facultyOptionsFields,
} from './faculty.constants';
import { facultyService } from './faculty.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await facultyService.insertIntoDB(req.body);

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const options = pick(req.query, facultyOptionsFields);
  const result = await facultyService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await facultyService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await facultyService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await facultyService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted successfully',
    data: result,
  });
});

const assignCourses = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await facultyService.assignCourses(id, req.body.courses);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course faculty assigned successfully',
    data: result,
  });
});

const removeCourses = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await facultyService.removeCourses(id, req.body.courses);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course faculty deleted successfully',
    data: result,
  });
});

export const facultyController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
  deleteFromDB,
  assignCourses,
  removeCourses,
};
