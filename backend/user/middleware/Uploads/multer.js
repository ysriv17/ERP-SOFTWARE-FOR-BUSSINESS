const multer = require("multer");
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     
        return cb(null, "./Public")
    },
    filename: function (req, file, cb) {
       
        return cb(null, file.fieldname + '---' + Date.now() + '.png');
    }
});
const upload = multer({ storage: storage });


exports.uploder = upload.fields([{ name: 'upload', maxCount: 1 }, { name: 'upload1', maxCount: 1 }, { name: 'upload2', maxCount: 1 }])
