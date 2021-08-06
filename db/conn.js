const dotenv = require("dotenv");
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("successful");
    })
    .catch((err) => { console.log("err", err) });