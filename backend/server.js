const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const LoginRoutes = require('./routes/LoginRouter');
const connectDatabase = require('./database/db');

const port = 3001;

const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/api',LoginRoutes);

app.get('/', (req, res) => {
    res.send('Hello! your backend is ready');
});

connectDatabase();

app.listen(port, () => {
    console.log(`The server is running on port http://localhost:${port}`);
});
