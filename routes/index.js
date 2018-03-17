const express = require("express");
const router = express.Router();

// Route
router.get("/", function (req, res) {
    res.render("index", {
        title: "Bienvenue à mon site en NodeJs ! "
    });
});

router.get("/new-entry", function (req, res) {
    res.render("new-entry", {
        title: "new-entry"
    });
});

module.exports = router;