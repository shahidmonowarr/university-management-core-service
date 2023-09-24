import { RedisClient } from '../../../shared/redis';
import {
  EVENT_FACULTY_CREATED,
  EVENT_FACULTY_UPDATED,
} from './faculty.constants';
import { facultyService } from './faculty.service';
import { FacultyCreatedEvent } from './facutly.interface';

const initFacultyEvents = () => {
  RedisClient.subscribe(EVENT_FACULTY_CREATED, async (e: string) => {
    const data: FacultyCreatedEvent = JSON.parse(e);

    await facultyService.createFacultyFromEvent(data);
  });

  RedisClient.subscribe(EVENT_FACULTY_UPDATED, async (e: string) => {
    const data = JSON.parse(e);
    await facultyService.updateFacultyFromEvent(data);
  });
};

export default initFacultyEvents;
