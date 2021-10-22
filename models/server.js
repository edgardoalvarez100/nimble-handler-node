const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.middlewares();
    this.routers();
  }

  listen() {
    if (process.env.SSL || false) {
      https
        .createServer(
          {
            cert: fs.readFileSync(process.env.HTTPS_CERTIFICADO),
            key: fs.readFileSync(process.env.HTTPS_KEY),
          },
          this.app
        )
        .listen(this.port, function () {
          console.log("Servidor https correindo en el puerto ", this.port);
        });
    } else {
      this.app.listen(this.port, () => {
        console.log("Servidor corriendo port:", this.port);
      });
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y paseo del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routers() {
    this.app.use("/api", require("../router"));
  }
}

module.exports = Server;