import { AcademicDepartment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data,
    include: {
      academicFaculty: true,
    },
  });
  return result;
};

export const academicDepartmentService = {
  insertIntoDB,
};
