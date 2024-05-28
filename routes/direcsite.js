// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/direcSite.model");
// 4- require controllers
const controllers = require("../controllers/direcsite.controller");
/**
 * @desc : add new Direcsite
 * @method : POST
 * @path : 'http://localhost:5000/api/direcsite/'
 * @data : req.body
 */
router.post("/", controllers.addDirecsites);
/**
 * @desc : get all Demandes
 * @method : GET
 * @path : 'http://localhost:5000/api/direcsite/'
 * @data : no
 */
router.get("/", controllers.getDirecsites);
/**
 * @desc : delete one Direcsite
 * @method : DELETE
 * @path : 'http://localhost:5000/api/direcsite/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteDirecsite);
/**
 * @desc : get one Direcsite by id
 * @method : GET
 * @path : 'http://localhost:5000/api/direcsite/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getDirecsite);
/**
 * @desc : update one Direcsite by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/direcsite/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateDirecsite);

module.exports = router;