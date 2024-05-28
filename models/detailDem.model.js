const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    Aritcle:String,
    description1:String,
    description2:String,
    JustifDemande:String,
    quantite:String,
    prix_unitaire:String,
    center_count:String,
    typeaxe1:String,
    typeanalyse1:String,
    typeaxe2:String,
    typeanalyse2:String,
    objetdecompte:String,

    
})

module.exports = mongoose.model('detail_Demande', userShema)

