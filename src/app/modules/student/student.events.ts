import { RedisClient } from '../../../shared/redis';
import {
  EVENT_STUDENT_CREATED,
  EVENT_STUDENT_UPDATED,
} from './student.constants';
import { studentService } from './student.service';

const initStudentEvents = () => {
  RedisClient.subscribe(EVENT_STUDENT_CREATED, async (e: string) => {
    const data = JSON.parse(e);

    await studentService.createStudentFromEvent(data);
  });

  RedisClient.subscribe(EVENT_STUDENT_UPDATED, async (e: string) => {
    const data = JSON.parse(e);

    await studentService.updateStudentFromEvent(data);
  });
};

export default initStudentEvents;
