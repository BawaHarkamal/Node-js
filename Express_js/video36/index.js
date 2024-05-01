const express = require('express');
const path = require('path');
const requests = require('requests');
const port = 4400;
const app = express();

app.get("/", (req, res) => {
    return res.send("hello from the server side");
    
});

app.get("/about", (req, res) => {

    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=a74f572a9484858fdbf0699c8581e02d`)
        .on('data', (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            //res.send(`the city is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
            res.status(200).json({ "success": true, "message": "Data fetched successfully" })
        })
        .on('end', (err) => {
            res.status(400).json({ "success": false, "message": err.message })
            if (err) return console.log('connection closed due to errors', err);
        });

});
app.listen(port, () => {
    console.log({ port });
});

