const EmployeModel = require('../models/Employe.model')
exports.ajouterEmployer =  async (req, res) => {

    //console.log(req.body);
    const EmployeObj = {
        name: req.body.name,
        departement: req.body.departement
    }
  
    try {
      const createdEmploye = await EmployeModel.create(EmployeObj);
      res.status(200).json({ createdEmploye });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listerEmploye =  (req, res) => {
    EmployeModel.find({})
      .then(contactEmploye => {
        res.status(200).json({ contactEmploye });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierEmploye =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
   name: req.body.name,
   departement: req.body.departement
 }
 EmployeModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier employe avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerEmploye = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    EmployeModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete Employe avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
