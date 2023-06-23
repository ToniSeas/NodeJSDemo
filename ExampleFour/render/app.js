// Import required modules
const express = require('express');
const path = require('path');

// Create Express.js app
const app = express();
const port = 3000;

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the HTML file
app.get('/', (req, res) => {
  // Render the HTML file
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
