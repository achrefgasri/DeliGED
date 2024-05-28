const direcsiteModel = require('../models/direcSite.model')
exports.ajouterdirecsiter =  async (req, res) => {

    //console.log(req.body);
    const direcsiteObj = {
        departement: req.body.departement
    }
  
    try {
      const createddirecsite = await direcsiteModel.create(direcsiteObj);
      res.status(200).json({ createddirecsite });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listerdirecsite =  (req, res) => {
    direcsiteModel.find({})
      .then(contactdirecsite => {
        res.status(200).json({ contactdirecsite });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierdirecsite =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
   departement: req.body.departement
 }
 direcsiteModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier direcsite avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerdirecsite = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    direcsiteModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete direcsite avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
