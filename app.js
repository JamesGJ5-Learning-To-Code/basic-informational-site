const http = require('http');
const fs = require('fs/promises');

function chooseFile(path) {
    switch (path) {
        case "/":
            return "index.html";
        case "/about":
            return "about.html";
        case "/contact-me":
            return "contact-me.html";
        default:
            return "404.html";
    }
}

async function server(req, res) {
    try {
        const fileName = chooseFile(req.url);
        const fileContents = await fs.readFile(fileName);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fileContents);
        return res.end();
    }
    catch (err) {
        console.log(err);
    }
}

http.createServer(server).listen(8080);