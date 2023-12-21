// Import the express framework
const express = require('express');

// Import custom HTML and API route modules
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

// Set the port for the server, defaulting to 3001 if not provided in the environment
const PORT = process.env.PORT || 3001;

// Create an instance of the express application
const app = express();

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Use the HTML and API route modules
app.use(htmlRoutes);
app.use(apiRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});