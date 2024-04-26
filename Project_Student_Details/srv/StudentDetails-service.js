module.exports = (srv) => {
  const { School } = cds.entities("StudentDetails");

  // Add email if left blank
  // srv.before("CREATE", "Students", (each) => {
  //   if (each.email == "")
  //     each.email = each.firstName + "." + each.lastName + "@gmail.com";
  // });

  // Increase school strength if student is admitted in that school
  // srv.before("CREATE", "Students", async (req) => {
  //   const studentInfo = req.data;

  //   const tx = cds.transaction(req);
  //   const affectedRows = await tx.run(
  //     UPDATE(School)
  //       .set({ SchoolStrength: { "+=": 1 } })
  //       .where({ school_id: studentInfo.school_school_id })
  //   );
  //   if (affectedRows === 0)
  //     req.error(409, "School Stength could not be increased, sorry");
  // });



  srv.before("CREATE", "Schools", async (req) => {
    req.data.SchoolStrength = req.data.students.length;

    if (req.data.students.length > 0) {
      updateEmail(req.data.students);
    }
  });

  srv.before("UPDATE", "Schools", async (req) => {
    req.data.SchoolStrength = req.data.students.length;

    if (req.data.students.length > 0) {
      updateEmail(req.data.students);
    }
  });

  function updateEmail(student) {
    student.forEach((studentInfo) => {
      if (!studentInfo.email) {
        studentInfo.email =
          studentInfo.firstName + "." + studentInfo.lastName + "@gmail.com";
      }
    });
  }
};
