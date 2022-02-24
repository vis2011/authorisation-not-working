class School {
  constructor() {
    this.schoolname = null;
    this.registrationNumber = null;
    this.location = null;
    this.mailId = null;
    this.phoneNumber = null;
    this.numberOfStudents = null;
    this.index = 10;
    this.username = null;
    this.password = null;
  }



  addschool() {
    var schoolIndex = ("schools/school") + this.index

    database.ref(schoolIndex).set({
      name: this.schoolname,
      registrationNo: this.registrationNumber,
      locationOfSchool: this.location,
      mailOfSchool: this.mailId,
      phoneNumberOfSchool: this.phoneNumber,
      numberOfStudents: this.numberOfStudents,
      Username: this.username,
      Password: this.password
    });
  }

  getCount() {
    var schoolCountRef = database.ref("schoolCount");
    schoolCountRef.on("value", data => {
      schoolCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      schoolCount: count
    });
  }
}

