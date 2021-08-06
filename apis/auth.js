
const express = require("express");
const router = express.Router();


require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(" / function of auth.js")
});

router.post('/register', (req, res) => {
    try {
        const { add, amm } = req.body;
        // res.json({ message: req.body });
        // res.send(" / function of Register")
        if (!add || !amm) {
            res.status(422).json({ error: "Fill all fields!" })
        }
        else {
            const user = new User({ address: add, amount: amm });
            user.save().then(() => {
                console.log("body", add, amm);
                res.status(201).json("Data Saved in db for arrays.")
            }).catch((error) => {
                res.status.apply(500).json("Not Saved")
            });
        }
    } catch (error) {
        console.log("error", error);
        res.send({ success: false, result: "transaction Error" });
    }
});
module.exports = router;