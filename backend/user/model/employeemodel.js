const mongoose = require("mongoose");
const fs = require("fs")
const { Schema } = mongoose;
const EmoyleeDetails = new Schema( {
    NAME: {
        type: String,
        required: [true]
    },
    EMPLOYEEID: {
        type: Schema.Types.Mixed,
        required: [true]
    },
    PASSWORD: {
        type: String,
        required: [true]
    },
    WORKPLACE: [{
        BRANCH: {
            type: String,
            required: [true]
        },
        COMPANY: {
            type: String,
            required: [true]
        },
        SITE: {
            type: String,
            required: [true]
        },
    }],
    ROLE: {
        type: String,
        required: [true]
    },
    PERMISSION: [{
        permission: {
            type: String,
            required: [false]
        }
    }]

});
module.exports = mongoose.model("EMPLOYEE DETAILS", EmoyleeDetails)