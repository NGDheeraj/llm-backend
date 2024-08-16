const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/index');

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
