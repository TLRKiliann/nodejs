const https = require("node:https");


const post_data = JSON.stringify({
    'msg': 'Hello World!',
});

let options = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/upload",
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(post_data)
    }
};

//change to http for local testing
let req = https.request(options, (res) => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', (chunk) => {
        console.log(body + chunk);
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.log(`Api call failed with response code ${res.statusCode}`);
        } else {
            callback(null);
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(post_data);
req.end();