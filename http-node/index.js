const http = require("node:http");
const fs = require("node:fs");

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHeader(200, {'Content-Type': 'text/plain'})
        res.end("Hello Home page");
    } else if (req.url === '/json1') {
        const personId = {name: "Estaban"};
        res.writeHeader(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(personId));
    } else if (req.url === '/json2') {
        const family = [
        {
            id: 1,
            cpu: "i-5",
            generation: 2
        },
        {
            id: 2,
            cpu: "i-7",
            generation: 3
        }];
        res.writeHeader(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(family));
    } else if (req.url === '/template') {
        const name = "Koalatr33";
        res.writeHeader(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync('./index.html', 'utf-8');
        html = html.replace("{{name}}", name);
        res.end(html);
    } else if (req.url === '/about') {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end("<title>Doug</title><h1>Hello Douglas !</h1>");
    } else {
        res.writeHeader(404);
        res.end("Page not found");
    }
});

server.listen(port, () => {
    console.log(`+ Server is running on port: ${port}!`)
});