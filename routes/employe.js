// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/Employe.model");
// 4- require controllers
const controllers = require("../controllers/employe.controller");
/**
 * @desc : add new Employe
 * @method : POST
 * @path : 'http://localhost:5000/api/employe/'
 * @data : req.body
 */
router.post("/", controllers.addEmploye);
/**
 * @desc : get all Brcomtables
 * @method : GET
 * @path : 'http://localhost:5000/api/employe/'
 * @data : no
 */
router.get("/", controllers.getEmployes);
/**
 * @desc : delete one Employe
 * @method : DELETE
 * @path : 'http://localhost:5000/api/employe/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteEmploye);
/**
 * @desc : get one Employe by id
 * @method : GET
 * @path : 'http://localhost:5000/api/employe/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getEmploye);
/**
 * @desc : update one Employe by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/employe/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateEmploye);

module.exports = router;