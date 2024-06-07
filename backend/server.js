const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 5000
const app = express();
const router = require("./user/routes/router");
const Dbconnect = require("./config/Dbconnection");
const bodyParser= require("body-parser")
const ejs = require("ejs")

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
    
};


app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.json())


app.set('view engine', ejs);
app.use("/user", router);
app.use("/user/company/Public/", express.static('Public'))
Dbconnect();

const server = app.listen(port, () => {
    console.log("server is running", port)
})
process.on("unhandledRejection",(err)=>{
    console.log(err,"promise Rejection error")
    
});
