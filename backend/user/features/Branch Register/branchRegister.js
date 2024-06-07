
const Mastermodel = require("../../model/mastermodel");
const branchRegister = async (req, res, next) => {

    try {
        const values = await req.body
        const { companyName,
            branchName,
            Disctrict,
            address1,
            State,
            Zipcode,
            City } = values
        console.log(values, branchName, Disctrict, address1, State, Zipcode, City)
        let details = await Mastermodel.findOne({ COMPNAYNAME: companyName })
        const branchexist =details.BRANCHES.find((Detail)=>{
          return Detail.BRANCHNAME = branchName 
        })
      
        if (branchexist == null ) {
           await Mastermodel.updateOne(details, { $push : { BRANCHES: { BRANCHNAME: branchName, DISCTRICT: Disctrict, ADDRESS: address1, STATE: State, ZIPCODE: Zipcode, CITY: City } } }, { new: true })
            res.json({
                "message": `user got with company :${companyName},with branch Name:${branchName}`
            })
        }
        else if(branchexist){
            
            res.json({ "message": "branch already exit" })
        }
        else {
            res.json({ "message": "branching error" })
        }
      
    }
    catch (err) {
        console.log("imhere error", err)
        res.json({ "message": `user not got` })
    }


}
module.exports = { branchRegister }