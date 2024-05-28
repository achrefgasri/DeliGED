const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    departement:String,
    SuprHeirchique:String,
    JustifDemande:String,
    Coutestime:Number,
    Delai_Reception:Date,
    PropositionFour:String,
    DesignationDedepense:String,
    Justifdepense:String,

    
})

module.exports = mongoose.model('Demande', userShema)

