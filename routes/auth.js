// 1-require express
const express = require("express");
// 2- require Router
const router = express.Router();
// 4- require controllers
const controllers = require("../controllers/auth.controllers");
const {
    validator,
    loginRules,
    registerRules,
  } = require("../middlewares/bodyValidator");
  // 3- require controllers
const uploadfile = require("../utils/uploadfile");
/**
 * @desc : Add New User
 * @method : POST
 * @path : 'http://localhost:5000/api/auth/register'
 * @data : req.body (Formulaire firstname , lastname , email , birthdate , bio , Email , Passsword , picture)
 */
router.post("/signup"  , uploadfile.upload , registerRules() , validator , controllers.Register)
/**
 * @desc : Login
 * @method : POST
 * @path : 'http://localhost:5000/api/auth/login'
 * @data : req.body (Formulaire Email and Password)
 */
router.post("/signin", loginRules() , validator, controllers.Login)
router.post("/testUpload", uploadfile.upload , controllers.TestUploadController)


module.exports = router ;