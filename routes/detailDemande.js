// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/detailDem.model");
// 4- require controllers
const controllers = require("../controllers/detaildem.controller");
/**
 * @desc : add new DetailDemande
 * @method : POST
 * @path : 'http://localhost:5000/api/detaildemande/'
 * @data : req.body
 */
router.post("/", controllers.addDetailDemande);
/**
 * @desc : get all DetailDemandes
 * @method : GET
 * @path : 'http://localhost:5000/api/detaildemande/'
 * @data : no
 */
router.get("/", controllers.getDetailDemandes);
/**
 * @desc : delete one DetailDemande
 * @method : DELETE
 * @path : 'http://localhost:5000/api/detaildemande/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteDetailDemande);
/**
 * @desc : get one DetailDemande by id
 * @method : GET
 * @path : 'http://localhost:5000/api/detaildemande/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getDetailDemande);
/**
 * @desc : update one DetailDemande by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/detaildemande/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateDetailDemande);

module.exports = router;