const mongoose = require("mongoose");
const fs = require("fs")


const Employee = { name: { type: String } }
const OtherEmployee = { name: { type: String }, designation: { type: String }, company: { type: String } }
const Audience = { name: { type: String }, designation: { type: String } }
const attendence = {
    data: Buffer,
    type: String,
}
const upload = {
    data: Buffer,
    type: String,
}
const Trainingnmodal = new mongoose.Schema({
    COMPNAYNAME: {
        type: String,
        required: [true]
    },
    BRANCHNAME: {
        type: String,
        required: [true]
    },
    SITE: {
        type: String,
        required: [true]
    },
    DATE: {
        type: Date,
    },
    TIME: {
        type: String,
    },
    TRAININGTYPE: {
        type: String,
    },
    TRAININGSUBJECT: {
        type: String,
    },
    EMPLOYEES: [Employee],
    OTHEREMPLOYEES: [OtherEmployee],
    AUDIENCE: [Audience],
    UPLOAD: [upload],
    ATTENDENCE: [],
    SUGGESTION : [],
    createdAt: { type: String },
    updatedAt: { type: String, },
    isActive: { type: Boolean }
},);
module.exports = mongoose.model("Training module", Trainingnmodal)


