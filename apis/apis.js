
const express = require("express");
const app = express();


const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(" / function of api")
});

app.get('/about', (req, res) => {
    res.send(" / function of about")
});

app.post('/post', (req, res) => {
    res.send(" / function of post")
});


app.listen(PORT, () => {
    console.log("Server is Listenig request at port `${PORT}`");
})