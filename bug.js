const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Simulate an error by setting a listener that never calls the callback
//This will lead to an error if the server is not closed properly
server.on('error',(err)=>{console.log('Error handled',err)});