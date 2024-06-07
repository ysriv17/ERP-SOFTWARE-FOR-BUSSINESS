
const Trainingmodal = require("../../model/Trainingmodal");
const TrainingModule = async (req, res, next) => {

    try {
        const values = await req.body
        const upload = req.files.upload[0].path
        const upload1 = req.files.upload1[0].path
        const upload2 = req.files.upload2[0].path
        const image = []
        image.push(upload, upload1)

        const value = JSON.parse(values.Details)
        console.log(value, image)
        await Trainingmodal.create({
            COMPNAYNAME: value.companyName,
            BRANCHNAME: value.BranchName,
            SITE: value.Site,
            DATE: value.Date,
            TIME: value.Time,
            TRAININGTYPE: value.Trainingtype,
            TRAININGSUBJECT: value.TrainingSubject,
            OTHEREMPLOYEES: value.Employee.map((data, index) => {
                return { name: data.Employee, designation: data.Designation, company: data.Company }
            }),
            AUDIENCE: await value.Audience.map((data, index) => {
                return { name: data.Audience, designation: data.Designation }
            }),
            SUGGESTION : await value.suggestion.map((data, index) => {
                return { Suggestion: data.suggestion, givenby: data.Employeee }
            }),
            UPLOAD: image,
            ATTENDENCE: upload2,
        })
        res.json({ "message": `working` })
    }
    catch (err) {
        console.log("imhere error", err)
        res.json({ "message": `user not got` })
    }


}
module.exports = { TrainingModule }