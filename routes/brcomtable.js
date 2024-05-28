// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/brcomtabl.model");
// 4- require controllers
const controllers = require("../controllers/brcomtabl.controller");
/**
 * @desc : add new Brcomtable
 * @method : POST
 * @path : 'http://localhost:5000/api/brcomtable/'
 * @data : req.body
 */
router.post("/", controllers.addBrcomtable);
/**
 * @desc : get all Brcomtables
 * @method : GET
 * @path : 'http://localhost:5000/api/brcomtable/'
 * @data : no
 */
router.get("/", controllers.getBrcomtables);
/**
 * @desc : delete one Brcomtable
 * @method : DELETE
 * @path : 'http://localhost:5000/api/brcomtable/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteBrcomtable);
/**
 * @desc : get one Brcomtable by id
 * @method : GET
 * @path : 'http://localhost:5000/api/brcomtable/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getBrcomtable);
/**
 * @desc : update one Brcomtable by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/brcomtable/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateBrcomtable);

module.exports = router;