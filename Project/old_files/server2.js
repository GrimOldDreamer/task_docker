// Variables block
const express = require('express');
const app = express();
const PORT = 1234//process.env.PORT;
const HOST = '192.168.1.10'//process.env.HOST;
var counter = 0;



app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, HOST  => console.log(`running on http://${HOST}:${PORT}`));
