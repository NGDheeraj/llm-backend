const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
