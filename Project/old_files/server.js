const express = require('express');
const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, HOST  = >console.log(`running on http://${HOST}:${PORT}`));
