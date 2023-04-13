const express = require("express");
const app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    res.send("Thanks for sending that!");
});

app.listen(3000, function() {
    console.log("Sever started on port 3000");
});