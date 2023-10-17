const http = require("node:http");

const port = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const name = [{
            firstname: "Cedric",
            age: 44
        },{
            firstname: "Devola",
            age: 33
        }
    ];
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(name));
    } else if (req.url === "/slow-page") {
        for (let i=0; i<600000000; i++) {};
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end("<h1>slow-page</h1>");
    }
});

server.listen(port, () => console.log(`+ Server is runing on port: ${port}`));