// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 3- require model
const Product = require("../models/user.model");
// 4- require controllers
const controllers = require("../controllers/user.controllers");


/**
 * @desc : get all users
 * @method : GET
 * @path : 'http://localhost:5000/api/user/'
 * @data : no
 */
router.get("/", controllers.getUsers);
/**
 * @desc : delete one user
 * @method : DELETE
 * @path : 'http://localhost:5000/api/user/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteUser);
/**
 * @desc : get one user by id
 * @method : GET
 * @path : 'http://localhost:5000/api/user/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getUser);
/**
 * @desc : update one user by id
 * @method : PUT
 * @path : 'http://localhost:5000/api/user/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateUser);

module.exports = router;
