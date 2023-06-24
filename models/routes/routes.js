// const express = require('express');
// const  router = express.Router();
// const multer = require('multer');

// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads');
//     },
//     filename:function(req, file, cb){
//         cb(null, file.filednam+"_"+Date.now()+"_"+file.originalname);
//     },

//     });

// var upload = multer({
//     storage: storage,
//  }).single("image");
//  //insert an user in to database
//  router.post('/add', upload, (req, res)=>{
//         const user= new User({
//         name: req.body.name,
//             });
//  })
//  module.exports = router; 