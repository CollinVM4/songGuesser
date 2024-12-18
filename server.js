// server.js

const express = require('express'); // require express library
const path = require('path');
const cors = require('cors');

const app = express(); // create an application by calling express
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.get('/api/songs', (req, res) => {
    // Example route to get songs
    const songs = [
        { title: 'Creep', artist: 'Radiohead' },
        { title: 'Poker Face', artist: 'Lady Gaga' },
        // Add more songs as needed
    ];
    res.json(songs);
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
