const { json } = require("body-parser");
const Login = require("../../model/employeemodel");
const bcrypt = require("bcrypt");

const LoginChecker = async (req, res, next) => {
    const values = await req.body
    const { EMPLOYEEID,
        PASSWORD,
        COMPNAY,
        BRANCH,
        SITE } = values
    try {
        let user = await Login.findOne({ EMPLOYEEID })
        if (user == null) {
            res.json({ status : "300" })
            throw new Error("user not valid");
        }
        else if (user.EMPLOYEEID === EMPLOYEEID && await bcrypt.compare(PASSWORD, user.PASSWORD)) {
            console.log(user)
            const { PASSWORD, ...rest } = user
                console.log(user)
            res.json({status:"200", userDetails : `${JSON.stringify(user)}`})
        }
        else {
            res.json({ status:"501"})
            throw new Error("wrong password")
        }
    }
    catch (err) {
        throw new Error(`${err}`)
    }
}


module.exports = { LoginChecker }