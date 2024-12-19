const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an error
  if(true){
    const error = new Error('Simulated error');
    //Proper way to handle an error
    return server.emit('error', error);
  }
  // Handle request
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = 3000;

//Handle error event
server.on('error', (err) => {
  console.error('Server error:', err);
  //Clean up resources, close server
  server.close(() => {
    console.log('Server closed');
    process.exit(1);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});