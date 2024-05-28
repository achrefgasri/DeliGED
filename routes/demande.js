// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/demande.model");
// 4- require controllers
const controllers = require("../controllers/");
/**
 * @desc : add new Demande
 * @method : POST
 * @path : 'http://localhost:5000/api/demande/'
 * @data : req.body
 */
router.post("/", controllers.addDemande);
/**
 * @desc : get all Demandes
 * @method : GET
 * @path : 'http://localhost:5000/api/demande/'
 * @data : no
 */
router.get("/", controllers.getDemandes);
/**
 * @desc : delete one Demande
 * @method : DELETE
 * @path : 'http://localhost:5000/api/demande/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteDemande);
/**
 * @desc : get one Demande by id
 * @method : GET
 * @path : 'http://localhost:5000/api/demande/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getDemande);
/**
 * @desc : update one Demande by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/demande/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateDemande);

module.exports = router;