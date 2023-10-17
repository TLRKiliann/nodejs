const http = require("node:http");
const { Worker } = require("node:worker_threads");

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end("<h1>Hello page !</h1>");
    } else if (req.url === "/slow-page") {
        const worker = new Worker('./thread_file.js');
        worker.on("message", (j) => {
            res.writeHeader(200, {'Content-Type': 'text/plain'});
            res.end(`Slow Page ${j}`);
        });
    }
});

server.listen(port, () => console.log(`+ Server is running on port: ${port}`));
