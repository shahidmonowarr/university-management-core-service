export const AcademicSemesterSearchableFields = [
  'title',
  'code',
  'startMonth',
  'endMonth',
];

export const AcademicSemesterFilterableFields = [
  'searchTerm',
  'code',
  'startMonth',
  'endMonth',
];

export const AcademicSemesterOptionsFields = [
  'sortBy',
  'sortOrder',
  'limit',
  'page',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Spring: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterTitles: string[] = ['Spring', 'Summer', 'Fall'];
export const academicSemesterCodes: string[] = ['01', '02', '03'];
export const academicSemesterMonths: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const EVENT_ACADEMIC_SEMESTER_CREATED = 'academic-semester-created';
