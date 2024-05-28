const demandeModel = require('../models/demande.model')
exports.ajouterdemande =  async (req, res) => {

    //console.log(req.body);
    const demandeObj = {
      departement:req.body.departement,
      SuprHeirchique:req.body.SuprHeirchique,
      JustifDemande:req.body.JustifDemande,
      Coutestime:req.body.Coutestime,
      Delai_Reception:req.body.Delai_Reception,
      PropositionFour:req.body.PropositionFour,
      DesignationDedepense:req.body.DesignationDedepense,
      Justifdepense:req.body.Justifdepense,
    }
  
    try {
      const createddemande = await demandeModel.create(demandeObj);
      res.status(200).json({ createddemande });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
  exports.listerdemande =  (req, res) => {
    demandeModel.find({})
      .then(contactdetination => {
        res.status(200).json({ contactdetination });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierdemande =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
    departement:req.body.departement,
    SuprHeirchique:req.body.SuprHeirchique,
    JustifDemande:req.body.JustifDemande,
    Coutestime:req.body.Coutestime,
    Delai_Reception:req.body.Delai_Reception,
    PropositionFour:req.body.PropositionFour,
    DesignationDedepense:req.body.DesignationDedepense,
    Justifdepense:req.body.Justifdepense,
     }
 demandeModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier demande avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerdemande = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    demandeModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete demande avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
