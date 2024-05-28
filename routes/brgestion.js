// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/brGestion.model");
// 4- require controllers
const controllers = require("../controllers/brgestion.controller");
/**
 * @desc : add new Brgestion
 * @method : POST
 * @path : 'http://localhost:5000/api/brgestion/'
 * @data : req.body
 */
router.post("/", controllers.addBrgestion);
/**
 * @desc : get all Brgestions
 * @method : GET
 * @path : 'http://localhost:5000/api/brgestion/'
 * @data : no
 */
router.get("/", controllers.getBrgestions);
/**
 * @desc : delete one Brgestion
 * @method : DELETE
 * @path : 'http://localhost:5000/api/brgestion/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteBrgestion);
/**
 * @desc : get one Brgestion by id
 * @method : GET
 * @path : 'http://localhost:5000/api/brgestion/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getBrgestion);
/**
 * @desc : update one Brgestion by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/brgestion/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateBrgestion);

module.exports = router;