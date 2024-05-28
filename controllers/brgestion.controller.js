const BrgestionModel = require('../models/brGestion.model')
exports.ajouterBrgestionr =  async (req, res) => {

    //console.log(req.body);
    const BrgestionObj = {
        departement: req.body.departement
    }
  
    try {
      const createdBrgestion = await BrgestionModel.create(BrgestionObj);
      res.status(200).json({ createdBrgestion });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listerBrgestion =  (req, res) => {
    BrgestionModel.find({})
      .then(contactBrgestion => {
        res.status(200).json({ contactBrgestion });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierBrgestion =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
   departement: req.body.departement
 }
 BrgestionModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier Brgestion avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerBrgestion = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    BrgestionModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete Brgestion avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
