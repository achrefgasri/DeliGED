const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    departement:String,
})

module.exports = mongoose.model('brgestion', userShema)

