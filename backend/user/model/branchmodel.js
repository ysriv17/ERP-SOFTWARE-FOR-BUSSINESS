const site = require("../model/sitemodel")

const Branchmaster= {

    BRANCHNAME: {
        type: String,
        required: [false]
    },
    DISCTRICT: {
        type: String,
        required: [false]
    },
    BRANCHADDRESS: {
        type: String,
        required: [false]
    },
    STATE: {
        type: String,
        required: [false]
    },
    ZIPCODE: {
        type: String,
        required: [false]
    },
    CITY: {
        type: String,
        required: [false]
    },
    SITES:[site],
   
};
module.exports = Branchmaster