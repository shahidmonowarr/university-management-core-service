import { Faculty } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Faculty): Promise<Faculty> => {
  const result = await prisma.faculty.create({
    data,
    include: {
      academicDepartment: true,
      academicFaculty: true,
    },
  });
  return result;
};

export const facultyService = {
  insertIntoDB,
};
