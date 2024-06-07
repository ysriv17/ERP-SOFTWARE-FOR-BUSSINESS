const bcrypt = require("bcrypt");
const EmployeeModel = require("../../model/employeemodel");
const EmployeeDetails = async (req, res, next) => {

    try {
        const values = await req.body
        const {
            NAME,
            EMPLOYEEID,
            PASSWORD,
            WORKPLACE,
            ROLE,
            PERMISSION
        } = values
        const hashedpassword = await bcrypt.hash(PASSWORD, 10);
        let details = await EmployeeModel.findOne({  EMPLOYEEID , NAME  })
       
        if (details == null) {
            EmployeeModel.create({
                NAME,
                EMPLOYEEID,
                PASSWORD:hashedpassword,
                WORKPLACE,
                ROLE,
                PERMISSION
})
        }
        else {
            res.json({ "message": "User Already exist" })
        }
        res.json({
            "message": `User Has Been Created With Id :${ EMPLOYEEID}`
        })
    }
    catch (err) {
        console.log("imhere error", err)
        res.json({ "message": `user not got` })
    }
}
module.exports = { EmployeeDetails }