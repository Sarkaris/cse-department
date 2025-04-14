// server.js

// 1. Import necessary modules
const express = require('express'); // Import the Express framework
const path = require('path');       // Import the 'path' module for working with file paths

// 2. Initialize the Express application
const app = express();

// 3. Define the port the server will listen on
// Use the environment variable PORT if available (for deployment), otherwise default to 3000
const PORT = process.env.PORT || 3000;

// 4. Configure Middleware
// Serve static files (HTML, CSS, JS, images) from the 'public' directory
// This is crucial for your website's assets to be accessible
// app.use(express.static(path.join(__dirname, 'public')));
// NEW:
app.use(express.static(path.join(__dirname, 'docs')));

// 5. Define Routes
// Handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // Send the 'index.html' file located in the 'public' directory
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- Add more routes here later ---
// Example:
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html')); // Assuming you create about.html
// });

// Handle requests for pages that don't exist (404) - Optional but good practice
app.use((req, res) => {
     res.status(404).send("Sorry, page not found!");
     // Or send a custom 404 HTML page:
     // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


// 6. Start the Server
// Make the app listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});