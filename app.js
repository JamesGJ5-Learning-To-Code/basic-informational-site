// const http = require('http');
// const fs = require('fs/promises');

// function chooseFile(path) {
//     switch (path) {
//         case "/":
//             return "index.html";
//         case "/about":
//             return "about.html";
//         case "/contact-me":
//             return "contact-me.html";
//         default:
//             return "404.html";
//     }
// }

// async function server(req, res) {
//     try {
//         const fileName = chooseFile(req.url);
//         const fileContents = await fs.readFile(fileName);
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(fileContents);
//         return res.end();
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// http.createServer(server).listen(8080);

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
