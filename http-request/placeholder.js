const https = require('https')


https.get('https://www.google.com',
response => {
    let todo = '';

    // called when a data chunk is received.
    response.on('data', chunk => {
    todo += chunk
    });

    // called when the complete response is received.
    response.on('end', () => {
    console.log(JSON.parse(todo))
    });
})
.on('error', error => {
    console.log('Error: ' + error.message)
});
/*
https.get('https://jsonplaceholder.typicode.com/todos/1',
    response => {
        let todo = '';

    // called when a data chunk is received.
    response.on('data', chunk => {
      todo += chunk
    });

    // called when the complete response is received.
    response.on('end', () => {
      console.log(JSON.parse(todo).title)
    });
  })
  .on('error', error => {
    console.log('Error: ' + error.message)
  });
  */