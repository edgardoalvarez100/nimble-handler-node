
const express = require("express");
const cors = require('cors');


class Server{

constructor(){
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.middlewares();
    this.routers();
    
}

listen(){
    this.app.listen(this.port, ()=> {
        console.log("Servidor corriendo port:",this.port);
    });
}

middlewares(){

    //CORS
    this.app.use(cors());

    //Lectura y paseo del body
    this.app.use(express.json());
    
    //directorio publico
    this.app.use(express.static("public"));
}

routers(){
    this.app.use("/api",require("../router"));
}

}

module.exports = Server;