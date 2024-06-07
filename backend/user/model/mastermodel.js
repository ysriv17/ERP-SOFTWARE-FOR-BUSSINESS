const mongoose = require("mongoose");
const fs = require("fs")
const branch = require("../model/branchmodel")


const companymaster = new mongoose.Schema({
    COMPNAYNAME: {
        type: String,
        required: [true]
    },
    CINNUMBER: {
        type: Number,
        required: [true]
    },
    DISCTRICT: {
        type: String,
        required: [true]
    },
    ADDRESS: {
        type: String,
        required: [true]
    },
    STATE: {
        type: String,
        required: [true]
    },
    ZIPCODE: {
        type: String,
        required: [true]
    },
    CITY: {
        type: String,
        required: [true]
    },
    BRANCHES: [branch],
    createdAt: { type: String },
    updatedAt: { type: String, },
    isActive: { type: Boolean }
},);
module.exports = mongoose.model("COMPANY MASTER", companymaster)


