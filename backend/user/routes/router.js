const express = require("express");
const router = express.Router();
const { companyRegister } = require("../features/Company Register/companyRegister");
const { branchRegister } = require("../features/Branch Register/branchRegister");
const { DbFeature } = require("../DbFeature");
const { DbTrainingModule } = require("../DbTrainingModule");
const Uploader = require("../middleware/Uploads/multer")
const { TrainingModule } = require('../features/TrainingModule/TrainingModule')
const up = Uploader.uploder
const EmoyleeDetails = require("../features/Employee Register/employeeRegister");
const { EmployeeDetails } = require("../features/Employee Register/employeeRegister");
const  {LoginChecker}  = require("../features/Login/Login")



router.route("/Company/Employee").post(EmployeeDetails)
router.route("/Login").post(LoginChecker)
router.route("/Company/register").post(companyRegister)
router.route("/Company/branch").post(branchRegister)
router.route("/Company/site").post(companyRegister)
router.route("/company/detail").get(DbFeature)
router.route("/trainingmodule/detail").get(DbTrainingModule)
router.route("/company/TrainingModule").get((req, res) => {
    res.render('index.ejs', {
        companyname: 'My EJS Page',
        branchname: "my company",
        site: "site",
        dateTime: "23-10-2024"
    });
})

router.route("/TrainingModule").post(up, TrainingModule)



module.exports = router;