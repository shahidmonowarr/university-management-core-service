import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  buildingFilterableFields,
  buildingOptionsFields,
} from './building.constants';
import { buildingService } from './building.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await buildingService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, buildingFilterableFields);
  const options = pick(req.query, buildingOptionsFields);

  const result = await buildingService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const buildingController = {
  insertIntoDB,
  getAllFromDB,
};
