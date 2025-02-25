const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Node.js service!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Node.js service running on port ${PORT}`);
});
