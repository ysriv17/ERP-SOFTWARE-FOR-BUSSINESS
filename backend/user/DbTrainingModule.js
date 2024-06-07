

const Mastermodel = require("../user/model/Trainingmodal");

const DbTrainingModule = async (req, res, next) => {
    const data = await Mastermodel.find({})
   
    res.json(data )

}
module.exports = { DbTrainingModule }