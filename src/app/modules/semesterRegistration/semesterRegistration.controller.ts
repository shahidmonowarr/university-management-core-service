import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  semesterRegistrationFilterableFields,
  semesterRegistrationOptionsFields,
} from './semesterRegistration.constants';
import { semesterRegistrationService } from './semesterRegistration.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await semesterRegistrationService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, semesterRegistrationFilterableFields);
  const options = pick(req.query, semesterRegistrationOptionsFields);

  const result = await semesterRegistrationService.getAllFromDB(
    filters,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registrations fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getOneFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await semesterRegistrationService.getOneFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration fetched successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await semesterRegistrationService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SemesterRegistration updated successfully',
    data: result,
  });
});

const deleteOneFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await semesterRegistrationService.deleteOneFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SemesterRegistration deleted successfully',
    data: result,
  });
});

export const semesterRegistrationController = {
  insertIntoDB,
  getAllFromDB,
  getOneFromDB,
  updateOneInDB,
  deleteOneFromDB,
};
