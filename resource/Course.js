export default class Course {
  constructor(id, name, numberOfClasses, students) {
    this.id = id;
    this.name = name;
    this.numberOfClasses = numberOfClasses;
    this.students = students;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getNumberOfClasses() {
    return this.numberOfClasses;
  }

  setNumberOfClasses(numberOfClasses) {
    this.numberOfClasses = numberOfClasses;
  }

  getStudents() {
    return this.students;
  }

  setStudents(students) {
    this.students = students;
  }
}
