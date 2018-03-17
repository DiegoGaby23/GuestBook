
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
    console.log(`le serveur à démarré sur le unsafe 3000 ${app.get("port")} `);
}

// Les chemins
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

app.use("/", require("./routes/index"));







