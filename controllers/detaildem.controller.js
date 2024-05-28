const detaildemModel = require('../models/detailDem.model')
exports.ajouterdetaildem =  async (req, res) => {

    //console.log(req.body);
    const detaildemObj = {
        Aritcle:req.body.Aritcle,
        description1:req.body.description1,
        description2:req.body.description2,
        JustifDemande:req.body.JustifDemande,
        quantite:req.body.quantite,
        prix_unitaire:req.body.prix_unitaire,
        center_count:req.body.center_count,
        typeaxe1:req.body.typeaxe1,
        typeanalyse1:req.body.typeanalyse1,
        typeaxe2:req.body.typeaxe2,
        typeanalyse2:req.body.typeanalyse2,
        objetdecompte:req.body.objetdecompte,
     
    }
  
    try {
      const createddetaildem = await detaildemModel.create(detaildemObj);
      res.status(200).json({ createddetaildem });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  exports.listerdetaildem =  (req, res) => {
    detaildemModel.find({})
      .then(contactdetination => {
        res.status(200).json({ contactdetination });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierdetaildem =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
    Aritcle:req.body.Aritcle,
    description1:req.body.description1,
    description2:req.body.description2,
    JustifDemande:req.body.JustifDemande,
    quantite:req.body.quantite,
    prix_unitaire:req.body.prix_unitaire,
    center_count:req.body.center_count,
    typeaxe1:req.body.typeaxe1,
    typeanalyse1:req.body.typeanalyse1,
    typeaxe2:req.body.typeaxe2,
    typeanalyse2:req.body.typeanalyse2,
    objetdecompte:req.body.objetdecompte,
 }
 detaildemModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier contact avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerdetaildem = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    detaildemModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete detaildem avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
