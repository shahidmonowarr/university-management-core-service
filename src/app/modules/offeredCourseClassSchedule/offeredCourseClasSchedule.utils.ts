import { OfferedCourseClassSchedule } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { hashTimeConflict } from '../../../shared/utils';

const checkRoomAvailable = async (data: OfferedCourseClassSchedule) => {
  const alreadyBookedRoomOnDay =
    await prisma.offeredCourseClassSchedule.findMany({
      where: {
        dayOfWeek: data.dayOfWeek,
        room: {
          id: data.roomId,
        },
      },
    });

  const existingSlots = alreadyBookedRoomOnDay.map(schedule => ({
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    dayOfWeek: schedule.dayOfWeek,
  }));

  const newSlot = {
    startTime: data.startTime,
    endTime: data.endTime,
    dayOfWeek: data.dayOfWeek,
  };

  if (hashTimeConflict(existingSlots, newSlot)) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Room already booked on this time slot'
    );
  }
};

export const offeredCourseClassScheduleUtils = {
  checkRoomAvailable,
};
