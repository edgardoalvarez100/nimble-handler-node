const fs = require("fs");
const path = require("path");


const indexPage = (req, res)=>{
    let rawData = fs.readFileSync(path.normalize(process.env.PATH_CONF));
    let conf = JSON.parse(rawData);

    let {apps} = conf.SyncResponse.RtmpSettings;
    res.json({apps});
};

module.exports = {indexPage}