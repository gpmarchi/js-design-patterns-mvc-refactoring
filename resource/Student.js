export default class Student {
  constructor(id, name, attendance) {
    this.id = id;
    this.name = name;
    this.attendance = attendance;
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

  getAttendance() {
    return this.attendance;
  }

  setAttendance(attendance) {
    this.attendance = attendance;
  }
}
