import { AcademicFaculty } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = (data: AcademicFaculty): Promise<AcademicFaculty> => {
  return prisma.academicFaculty.create({
    data,
  });
};

export const academicFacultyService = {
  create,
};
