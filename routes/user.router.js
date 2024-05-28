const express = require('express')

const router = express.Router();
const brcomtableController= require("../controllers/brcomtabl.controller")
const brgestionController= require("../controllers/brgestion.controller")
const demandeController= require("../controllers/demande.model")
const direcsiteController= require("../controllers/direcsite.controller")
const detailDemandeController= require("../controllers/detaildem.controller")
const EmployeController= require("../controllers/employe.controller")
const refusedController= require("../controllers/refused.controller")
const ValidateurController= require("../controllers/Validateur.controller")
const userController = require("../controllers/user.controller")

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

router.post('/addbrcomtable', brcomtableController.ajouterBrcomtablr)
router.get('/getbrcomtable', brcomtableController.listerBrcomtabl)
router.put('/modifierbrcomtable/:id', brcomtableController.modifierBrcomtabl)
router.delete('/deletebrcomtable/:id', brcomtableController.supprimerBrcomtabl)

router.post('/addbrgestion', brgestionController.ajouterBrgestionr)
router.get('/getbrgestion', brgestionController.listerBrgestion)
router.put('/modifierbrgestion/:id', brgestionController.listerBrgestion)
router.delete('/deletebrgestion/:id', brgestionController.supprimerBrgestion)

router.post('/adddemande', demandeController.ajouterdemande)
router.get('/getdemande', demandeController.listerdemande)
router.put('/modifierdemande/:id', demandeController.modifierdemande)
router.delete('/deletedemande/:id', demandeController.supprimerdemande)

router.post('/adddirecsite', direcsiteController.ajouterdirecsiter)
router.get('/getdirecsite', direcsiteController.listerdirecsite)
router.put('/modifierdirecsite/:id', direcsiteController.modifierdirecsite)
router.delete('/deletedirecsite/:id', direcsiteController.supprimerdirecsite)

router.post('/adddetailDemande', detailDemandeController.ajouterdetaildem)
router.get('/getdetailDemande', detailDemandeController.listerdetaildem)
router.put('/modifierdetailDemande/:id', detailDemandeController.modifierdetaildem)
router.delete('/deletedetailDemande/:id', detailDemandeController.supprimerdetaildem)

router.post('/addEmploye', EmployeController.ajouterEmployer)
router.get('/getEmploye', EmployeController.listerEmploye)
router.put('/modifierEmploye/:id', EmployeController.modifierEmploye)
router.delete('/deleteEmploye/:id', EmployeController.supprimerEmploye)

router.post('/addrefused', refusedController.ajouterRefused)
router.get('/getrefused', refusedController.listerRefused)
router.put('/modifierrefused/:id', refusedController.modifierRefused)
router.delete('/deleterefused/:id', refusedController.supprimerRefused)

router.post('/addValidateur', ValidateurController.ajouterValidateurr)
router.get('/getValidateur', ValidateurController.listerValidateur)
router.put('/modifierValidateur/:id', ValidateurController.modifierValidateur)
router.delete('/deleteValidateur/:id', ValidateurController.supprimerValidateur)


module.exports = router;