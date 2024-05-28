// const multer = require('multer');
// const express = require('express');
// const path = require('path');
// const upload = multer({ dest: 'UploadUserImage/' });

// const MIME_TYPES = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpeg',
//     'image/png': 'png'
//   };
// // Multer Configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
  
//   const upload = multer({ storage });
  
//   // Upload Endpoint
//   app.post('/upload', upload.single('image'), (req, res) => {
//     if (!req.file) {
//       return res.status(400).send('No files were uploaded.');
//     }
//     // Handle the file (e.g., save to database, send response)
//     res.send(');
//   });
//   module.exports = uploadimage;
  