
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/IsAuth");
const sendEmail = require("../utils/sendemail");
const User = require("../models/user.model");
const upload = require('../utils/uploadfile'); 
const Register = async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      role, 
      bio,
      picture,
      birthdate,
    } = req.body;
  
    try {
    
  
      // Check if the user already exists
      const existingUserEmail = await User.findOne({ email });
      if (existingUserEmail) {
        return res.status(400).send({ msg: "User already exists" });
      }
        
        // Generate random password
        const randomPassword = Math.random().toString(36).slice(-8); // 8 characters
        
        // Create a new user
        const user = new User({
          firstname,
          lastname,
          email,
          role, 
          bio,
          birthdate,
          password: randomPassword, // Saving random password before hashing
          picture: "vv" // Enregistrez le chemin de l'image dans la base de données
        });
        
        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(randomPassword, salt);
        user.password= hashedPassword;
        
        // Save the user in DB
        await user.save();
    
        // Send email with the password
        const message = `Votre mot de passe est ${randomPassword}`;
        await sendEmail({
          email: email,
          subject: 'DeliGED Password Recovery',
          message,
        });
    
        // Sign the user
        const payload = {
          _id: user._id,
        };
        const token = await jwt.sign(payload, process.env.secretOrKey);
        
        res.status(200).send({ msg: "Registration successful", user, token });
     
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Server error", error });
    }
  };

  const convertUser = (user) => {
    return {
      id: user._id,
      email: user.email,
      
    };
  };
  
  const Login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
     // verification of email exist
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ msg: "Bad Credentials: Email" });
      }
  
    // verification of password true 
      if (!password || !user.password) {
        return res.status(400).send({ msg: "Invalid Credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Bad Credentials: Password" });
      }
  
   // sigin user
      const payload = {
        _id: user._id,
      };
  
      const token = jwt.sign(payload, process.env.secretOrKey, { expiresIn: '1h' }); // إضافة مدة انتهاء الصلاحية
  
      res.send({ msg: "Login Success", user: convertUser(user), token });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  };
  

// router.put("/:_id", async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const newUser = req.body;
//     let result = await User.updateOne({ _id }, { $set: { ...newUser } });
//     if (result.modifiedCount === 0) {
//       return res.status(400).send({ msg: " User already updated  !!! " });
//     }
//     res.status(200).send({ msg: " User updated succ ..... " });
//   } catch (error) {
//     res
//       .status(400)
//       .send({ msg: " Can not update user with this id !!! ", error });
//   }
// });

// router.get("/me", isAuth, (req, res) => {
//   res.status(200).send({ user: req.user });
// });

// router.get("/", async (req, res) => {
//   const users = await User.find();
//   res.status(200).send({ users });
// })

// const TestUploadController = async (req, res) => {
//   try {
//     const { path: ImageUser } = req.file;
//     if(req.file){
//       const newTestUpload = new TestUpload({ ImageUser });
//       await newTestUpload.save();
//     }else{
//       const newTestUpload = new TestUpload({ ImageUser });
//       await newTestUpload.save();
//     }
    
//     res.status(200).send({ 'Image uploaded successfully!' ,ImageUser});
// } catch (error) {
//     res.status(500).send({msg:'Error uploading image})
// };
const TestUploadController = async (req, res) => {
  try {
      if(req.file){
        const { path: ImageUser } = req.file;
        const newTestUpload = new TestUpload({ ImageUser });
              await newTestUpload.save();
      }else{
        const newTestUpload = new TestUpload({ ImageUser });
              await newTestUpload.save();
      }
      
      res.status(200).send({ msg:'Image uploaded successfully' ,updateUser});
  } catch (error) {
      res.status(500).send({msg:'Error uploading image'})
  }
}
module.exports = controllers = {
  Register,
  Login,
  TestUploadController,
};

