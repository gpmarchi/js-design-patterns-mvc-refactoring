import CourseModel from "../model/course.js";
import CourseView from "../view/course.js";

export default function CourseController() {
  function init() {
    CourseView().render();
  }

  function getCourse() {
    return CourseModel().getCourse();
  }

  function updateAttendance(course, studentId, classNumber) {
    CourseModel().updateAttendance(course, studentId, classNumber);
    CourseView().render();
  }

  return {
    init: init,
    getCourse: getCourse,
    updateAttendance: updateAttendance
  };
}
