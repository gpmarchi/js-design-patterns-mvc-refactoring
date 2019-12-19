import Student from "../resource/Student.js";
import Course from "../resource/Course.js";

function getRandomAttendance() {
  return Math.random() >= 0.5;
}

export function createHTMLElement(tagName, tagProperties) {
  const htmlTag = document.createElement(tagName);
  const tagPropertiesEntries = Object.entries(tagProperties);

  tagPropertiesEntries.forEach(([key, value]) => {
    htmlTag[key] = value;
  });

  return htmlTag;
}

function loadStudents(numberOfClasses) {
  const studentNames = [
    "Slappy the Frog",
    "Lilly the Lizard",
    "Paulrus the Walrus",
    "Gregory the Goat",
    "Adam the Anaconda"
  ];

  const courseStudents = [];

  studentNames.forEach((name, index) => {
    const studentAttendance = [];
    for (let index = 0; index < numberOfClasses; index++) {
      studentAttendance.push(getRandomAttendance());
    }
    const student = new Student(index + 1, name, studentAttendance);
    courseStudents.push(student);
  });

  return courseStudents;
}

export function loadCourse(numberOfClasses) {
  if (!localStorage.course) {
    const courseStudents = loadStudents(numberOfClasses);
    const course = new Course(
      1,
      "Some crazy course!",
      numberOfClasses,
      courseStudents
    );
    localStorage.course = JSON.stringify(course);
  }
}
