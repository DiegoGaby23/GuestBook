
// Exportations 
let express = require("express");
let app = express();
let path = require("path");
let morgan = require("morgan");
let bodyParser = require("body-parser");
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

require('./routes/index')(app);







