import CourseController from "../controller/course.js";
import { createHTMLElement } from "../utils/utils.js";

export default function CourseView() {
  const course = CourseController().getCourse();
  const courseTitle = document.querySelector("body h1");
  const tableHeader = document.querySelector("body table thead tr");
  const tableBody = document.querySelector("body table tbody");

  function clearView() {
    courseTitle.innerHTML = "";
    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";
  }

  function renderTitle() {
    courseTitle.innerHTML = course.getName();
  }

  function createCourseTableHeaderColumns() {
    const columns = [];

    const studentNameHeaderColumn = createHTMLElement("th", {
      className: "name-col",
      innerHTML: "Student Name"
    });
    columns.push(studentNameHeaderColumn);

    const classNumberColumns = [];
    for (let index = 0; index < course.getNumberOfClasses(); index++) {
      const courseClassNumberColumn = createHTMLElement("th", {
        innerHTML: index + 1
      });
      classNumberColumns.push(courseClassNumberColumn);
    }
    columns.push(classNumberColumns);

    const daysMissedHeaderColumn = createHTMLElement("th", {
      className: "missed-col",
      innerHTML: "Days Missed"
    });
    columns.push(daysMissedHeaderColumn);

    return columns;
  }

  function renderCourseTableHeader() {
    const tableHeaderColumns = createCourseTableHeaderColumns();

    tableHeaderColumns.forEach(headerColumn => {
      if (!Array.isArray(headerColumn)) {
        tableHeader.appendChild(headerColumn);
      } else {
        headerColumn.forEach(column => {
          tableHeader.appendChild(column);
        });
      }
    });
  }

  function createCourseTableBodyStudentLine(student) {
    const studentTableBodyLine = createHTMLElement("tr", {
      className: "student"
    });

    const studentNameColumn = createHTMLElement("td", {
      className: "name-col",
      innerHTML: student.getName()
    });
    studentTableBodyLine.appendChild(studentNameColumn);

    const attendance = student.getAttendance();
    attendance.forEach((classPresence, index) => {
      const studentClassPresenceColumn = createHTMLElement("td", {
        className: "attend-col"
      });

      const attendanceCheckInput = createHTMLElement("input", {
        type: "checkbox",
        checked: classPresence
      });
      attendanceCheckInput.addEventListener("click", () => {
        CourseController().updateAttendance(course, student.id - 1, index);
      });
      studentClassPresenceColumn.appendChild(attendanceCheckInput);

      studentTableBodyLine.appendChild(studentClassPresenceColumn);
    });

    const daysMissedColumn = createHTMLElement("td", {
      className: "missed-col",
      innerHTML: attendance.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    });
    studentTableBodyLine.appendChild(daysMissedColumn);

    return studentTableBodyLine;
  }

  function renderCourseTableBody() {
    const students = course.getStudents();

    students.forEach(student => {
      const studentTableBodyLine = createCourseTableBodyStudentLine(student);
      tableBody.appendChild(studentTableBodyLine);
    });
  }

  function renderCourseTable() {
    clearView();
    renderTitle();
    renderCourseTableHeader();
    renderCourseTableBody();
  }

  return {
    render: renderCourseTable
  };
}
