const fs = require("fs");
const path = require("path");
// let jsonData = require(path.join(__dirname, "..", "data", "rules.conf"))

const indexPage = (req, res)=>{
    let rawData = fs.readFileSync(path.join(__dirname, "..", "data", "rules.conf"));
    let conf = JSON.parse(rawData);
    // res.json({conf});
    let {apps} = conf.SyncResponse.RtmpSettings;
    res.json({apps});
};

module.exports = {indexPage}