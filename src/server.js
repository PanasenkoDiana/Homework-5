const express = require('express');
const path = require('path');

const app = express();
const HOST = 'localhost';
const PORT = 8000;


app.use('/static/', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'));
});

app.get('/date', (req, res) => {
    res.sendFile(path.join(__dirname, './templates/date.html'));
});

app.get('/api/date', (req, res) => {
    let currentDate = new Date();
    res.json({ date: currentDate.toString() });
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});