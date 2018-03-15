
// Exportations 
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// fin d'Exportations 



// Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port")), () => {
    console.log(`Connection au port 3000 ${app.get("port")} `)
}
// Fin du // Server

// Les chemins
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Fin des  chemins







