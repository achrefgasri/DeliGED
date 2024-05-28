const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    name : String,
    departement:String,
})

module.exports = mongoose.model('employe', userShema)

