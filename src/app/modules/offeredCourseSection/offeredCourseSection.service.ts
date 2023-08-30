import { OfferedCourseSection } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: any): Promise<OfferedCourseSection> => {
  const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
    where: {
      id: data.offeredCourseId,
    },
  });

  if (!isExistOfferedCourse) {
    throw new Error('Offered Course does not exist');
  }

  data.semesterRegistrationId = isExistOfferedCourse.semesterRegistrationId;

  const result = await prisma.offeredCourseSection.create({
    data,
  });
  return result;
};

export const offeredCourseSectionService = {
  insertIntoDB,
};
