const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    justification:String,
})

module.exports = mongoose.model('refused', userShema)

