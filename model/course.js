import Student from "../resource/Student.js";
import Course from "../resource/Course.js";

export default function CourseModel() {
  function getCourse() {
    const JSONCourse = localStorage.getItem("course");
    const { id, name, numberOfClasses, students: JSONStudents } = JSON.parse(
      JSONCourse
    );

    const students = [];
    JSONStudents.forEach(({ id, name, attendance }) => {
      const student = new Student(id, name, attendance);
      students.push(student);
    });

    const course = new Course(id, name, numberOfClasses, students);
    return course;
  }

  function updateAttendance(course, studentId, classNumber) {
    const newAttendanceStatus = !course
      .getStudents()
      [studentId].getAttendance()[classNumber];

    course.getStudents()[studentId].getAttendance()[
      classNumber
    ] = newAttendanceStatus;

    localStorage.setItem("course", JSON.stringify(course));
  }

  return {
    getCourse: getCourse,
    updateAttendance: updateAttendance
  };
}
