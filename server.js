const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Check the request URL
  if (req.url === '/api') {
    // Respond with a JSON object
    res.end(JSON.stringify({ message: 'Hello, this is your API response!' }));
  } else {
    // Respond with a 404 for other routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
