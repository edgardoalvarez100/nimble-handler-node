const fs = require("fs");
const path = require("path");


const indexPage = (req, res)=>{

    try {
        let rawData = fs.readFileSync(path.normalize(process.env.PATH_CONF),'utf-8');
        
        let conf = JSON.parse(rawData.split('\n').filter(Boolean)[1]);
    
        let {apps} = conf.SyncResponse.RtmpSettings;
        res.json({apps});
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"error leyendo archivo"});
    }
    
};

module.exports = {indexPage}