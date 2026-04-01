// Application logic for Stardew Valley Hub

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Stardew Valley Hub!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});