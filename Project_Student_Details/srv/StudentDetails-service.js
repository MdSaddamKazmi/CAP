module.exports = (srv) => {

    const { School } = cds.entities('StudentDetails')

    // Add email if left blank
    srv.before('CREATE', 'Students', each => {
        if (each.email == '')  each.email = each.firstName + '.' + each.lastName + '@gmail.com'
    })

    
  // Increase school strength if student is admitted in that school
      srv.before ('CREATE', 'Students', async (req) => {
        const studentInfo = req.data
        
        const tx = cds.transaction(req)
        const affectedRows = await tx.run (
          UPDATE (School)
            .set   ({ SchoolStrength: {'+=': 1} })
            .where ({ school_id: studentInfo.school_school_id })
        )
        if (affectedRows === 0)  req.error (409, "School Stength could not be increased, sorry")
      })



}