

const Mastermodel = require("../../model/mastermodel");
const companyRegister = async (req, res, next) => {

  try {
    const values = await req.body
    const { companyName,
      cinNumber,
      Disctrict,
      address1,
      State,
      Zipcode,
      City } = values
    console.log(values, req.body, cinNumber, Disctrict, address1, State, Zipcode, City)
    let details = await Mastermodel.findOne({ COMPNAYNAME: companyName, CINNUMBER: cinNumber })
    console.log(details)
    if (details == null) {
      Mastermodel.create({ COMPNAYNAME: companyName, CINNUMBER: cinNumber, DISCTRICT: Disctrict, ADDRESS: address1, STATE: State, ZIPCODE: Zipcode, CITY: City })
    }
    else {
      res.json({ "message": "Company Already exist" })
    }
    res.json({
      "message": `user got with company :${companyName}`
    })
  }
  catch (err) {
    console.log("imhere error", err)
    res.json({ "message": `user not got` })
  }
}
module.exports = { companyRegister }