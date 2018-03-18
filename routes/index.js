module.exports = (app) => {
    let entries = [];
    app.locals.entries = entries;
    // Route
    app.get("/",  (req, res) => {
        res.render("index", {
            title: "Bienvenue à mon site en NodeJs ! "
        });
    });

    app.get("/new-entry", function (req, res) {
        res.render("new-entry", {
            title: "new-entry"
        });
    });

    app.post("/new-entry", (req, res) => {
        if (!req.body.title || !req.body.body) {
            res.send(404).send("Error page not found");
        }


        let newEntry = {
            title: req.body.title,
            content: req.body.body,
            pubished: new Date()
        };
        entries.push(newEntry);
        res.redirect("/");
    });
}


