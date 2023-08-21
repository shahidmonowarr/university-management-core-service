import { AcademicFaculty, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { AcademicFacultySearchableFields } from './academicFaculty.constants';
import { IAcademicFacultyFilterRequest } from './academicFaculty.interface';

const create = (data: AcademicFaculty): Promise<AcademicFaculty> => {
  return prisma.academicFaculty.create({
    data,
  });
};

const getAll = async (
  filters: IAcademicFacultyFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicFaculty[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  console.log(options);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: AcademicFacultySearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0)
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });

  const whereCondition: Prisma.AcademicFacultyWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.academicFaculty.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.academicFaculty.count({
    where: whereCondition,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  data: AcademicFaculty
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteById = async (id: string): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.delete({
    where: {
      id,
    },
  });
  return result;
};

export const academicFacultyService = {
  create,
  getAll,
  getDataById,
  updateById,
  deleteById,
};
