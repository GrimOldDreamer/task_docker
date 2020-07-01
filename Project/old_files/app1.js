const express = require('express');
const storage = require('node-persist');

var counter = 0;
var app = express();
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


    app.listen(1234, "0.0.0.0");
});
