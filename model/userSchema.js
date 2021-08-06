

const mongoose = require("mongoose");

const firstSchema = new mongoose.Schema({
    address: String,
    amount: Number,
})

const Playlist = new mongoose.model("Playlist", firstSchema);


const creatDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "React js",
            addressarrayone: "fcgvhbjkl",
            lastAmount: 10,

        })

        const reactPlaylist = new Playlist({
            name: "React js",
            addressarrayone: "fcgvhbjkl",
            lastAmount: 10,

        })

        const mongoosePlaylist = new Playlist({
            name: "React js",
            addressarrayone: "fcgvhbjkl",
            lastAmount: 10,

        })

        const mongodbPlaylist = new Playlist({
            name: "React js",
            addressarrayone: "fcgvhbjkl",
            lastAmount: 10,

        })
        // const result = await playListName.save();
        // console.log(result);
        const result = await Playlist.insertMany([jsPlaylist, reactPlaylist, mongoosePlaylist, mongodbPlaylist]);
        console.log(result);
    } catch (e) {
        console.log(e)
    }
}
// creatDocument();

const getDocument = async () => {
    const res = await Playlist.find();
    console.log(res);
}
getDocument();


module.exports = Playlist;