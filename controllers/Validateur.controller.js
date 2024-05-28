const ValidateurModel = require('../models/Validateur.model')
exports.ajouterValidateurr =  async (req, res) => {

    //console.log(req.body);
    const ValidateurObj = {
        departement: req.body.departement
    }
  
    try {
      const createdValidateur = await ValidateurModel.create(ValidateurObj);
      res.status(200).json({ createdValidateur });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listerValidateur =  (req, res) => {
    ValidateurModel.find({})
      .then(contactValidateur => {
        res.status(200).json({ contactValidateur });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierValidateur =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
   departement: req.body.departement
 }
 ValidateurModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier Validateur avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerValidateur = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    ValidateurModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete Validateur avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
