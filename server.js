const express = require('express');
const app = express();
const path = require('path')

app.use(express.json())


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html')) //dirname current directory working in
})



const port = process.env.PORT || 4545; //process gets the port of heroku

app.listen(port, function() {
    console.log(`Server jammin on ${port}`)
} )