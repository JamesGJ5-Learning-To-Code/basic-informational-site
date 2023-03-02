// TODO: write error-handling logic
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "/about.html"))
});

app.get("/contact-me", function (req, res) {
    res.sendFile(path.join(__dirname, "/contact-me.html"));
});

// TODO: replace the below two statements with the most appropriate logic
app.get("/404", function (req, res) {
    res.sendFile(path.join(__dirname, "/404.html"));
});
// NOTE: must come after the previous get statements
app.get("*", function (req, res) {
    res.redirect("/404");
});

app.listen(port, () => {
    console.log(`Basic informational website listening on port ${port}!`)
});
