const RefusedModel = require('../models/refusedad.model')
exports.ajouterRefused =  async (req, res) => {

    //console.log(req.body);
    const RefusedObj = {
        justification: req.body.justification
    }
  
    try {
      const createdRefused = await RefusedModel.create(RefusedObj);
      res.status(200).json({ createdRefused });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listerRefused =  (req, res) => {
    RefusedModel.find({})
      .then(contactRefused => {
        res.status(200).json({ contactRefused });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierRefused =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
    justification: req.body.justification
 }
 RefusedModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier Refused avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerRefused = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    RefusedModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete Refused avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
