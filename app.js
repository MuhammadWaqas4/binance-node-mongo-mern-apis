const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
// const playlist = ('./model/userSchema');
// require('./apis/apis');
app.use(express.json());
app.use(require('./apis/auth'));

const PORT = process.env.PORT;

// console.log(playlist);

const middleware = (req, res, next) => {
    console.log("Middleware")
    next();
}

app.get('/', (req, res) => {
    res.send(" / function of api app.js")
});

app.get('/about', middleware, (req, res) => {
    res.send(" / function of about")
});

app.post('/post', (req, res) => {
    res.send(" / function of post")
});


app.listen(PORT, () => {
    console.log("Server is Listenig request at port `${PORT}`");
})