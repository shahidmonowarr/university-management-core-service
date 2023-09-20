const getAvailableCourses = (
  offeredCourses: any,
  studentCompletedCourses: any,
  studentCurrentlyTakenCourses: any
) => {
  const completedCourseId = studentCompletedCourses.map(
    (course: any) => course.courseId
  );

  const availableCoursesList = offeredCourses.filter(
    (offeredCourse: any) =>
      !completedCourseId
        .includes(offeredCourse.courseId)
        .filter((course: any) => {
          const preRequisites = course.course.preRequisite;

          if (preRequisites.length === 0) {
            return true;
          } else {
            const preRequisiteIds = preRequisites.map(
              (preRequisite: any) => preRequisite.preRequisiteId
            );
            return preRequisiteIds.every((id: string) =>
              completedCourseId.includes(id)
            );
          }
        })
        .map((course: any) => {
          const isAlreadyTakenCourse = studentCurrentlyTakenCourses.find(
            (c: any) => c.offeredCourseId === course.id
          );

          if (isAlreadyTakenCourse) {
            course.offeredCourseSections.map((section: any) => {
              if (section.id === isAlreadyTakenCourse.offeredCourseSectionId) {
                section.isTaken = true;
              } else {
                section.isTaken = false;
              }
            });

            return {
              ...course,
              isTaken: true,
            };
          } else {
            course.offeredCourseSections.map((section: any) => {
              section.isTaken = false;
            });
            return {
              ...course,
              isTaken: false,
            };
          }
        })
  );
  return availableCoursesList;
};

export const semesterRegistrationUtils = {
  getAvailableCourses,
};
