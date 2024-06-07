

const Mastermodel = require("../user/model/mastermodel");

const DbFeature = async (req, res , next)=>{
 const data = await Mastermodel.find({})
  res.json({data})

}
module.exports ={DbFeature}