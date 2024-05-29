const mongoose = require("mongoose")

const userShema = new mongoose.Schema({

    Nom: { type: String, require: true },
    Prénom:{ type: String, require: true },
    CIN: { type: String, require: true, unique: true },
    Telephone:{ type: Number, require: true },
    Email: { type: String, require: true, unique: true },
    MotdePasse: { type: String },
    Département:{type: String}, 
    Role: String,
})

module.exports = mongoose.model('users', userShema)

