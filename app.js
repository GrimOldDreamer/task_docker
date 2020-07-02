const express = require('express');
const storage = require('node-persist');

var app = express();
var PORT = process.env.PORT;
var HOST = process.env.HOST;
var counter = 0;


app.use(express.static('./static'));

app.get("/visit", (req, res) => {
    counter++;


    storage.setItem("counter", counter).then(() => {
        res.json(counter);
    });
});

storage.init().then(() => storage.getItem("counter")).then((value) => {

    if (value > 0) {
        counter = value;
    } else {
        counter = 0;
    }


    app.listen(PORT, HOST);
});
