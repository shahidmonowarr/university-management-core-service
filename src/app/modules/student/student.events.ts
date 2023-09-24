import { RedisClient } from '../../../shared/redis';
import { EVENT_STUDENT_CREATED } from './student.constants';
import { studentService } from './student.service';

const initStudentEvents = () => {
  RedisClient.subscribe(EVENT_STUDENT_CREATED, async (e: string) => {
    const data = JSON.parse(e);

    await studentService.createStudentFromEvent(data);
  });
};

export default initStudentEvents;
