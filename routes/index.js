const express = require("express");
const router = express.Router();

// Route
router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router;