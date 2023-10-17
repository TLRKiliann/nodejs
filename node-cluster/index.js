const http = require("node:http");
const cluster = require("node:cluster");
// const OS = require("node:os");

//console.log(OS.cpus().length);

const port = 8000;

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker process : ${process.pid} started`);
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
}
