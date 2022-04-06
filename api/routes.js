require("dotenv").config();
const express = require("express");
const User = require("../model/users");
const auth = require("../controller/auth");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Userregister=require('../controller/register.controller.js');
const Userlogin=require('../controller/login.controller.js');
const  city  = require("../controller/city.controller.js");
const userfind=require("../controller/fideride.controller.js");

 
// const { required } = require("joi");

 const router = express.Router();

//  router.use(function(req ,res, next){
//      console.log(req.url,'@');
//      next();
//  })


router
.route('/register')
.post(function(req,res){
     console.log("Kailash Mewada");
    Userregister.register(req, res);
});



router
.route('/findride')
.get(function(req ,res){
   userfind.ride(req ,res);
})

router
.route('/login')
.post(function(req, res){
    Userlogin.login(req,res);
});

router
.route('/autocity')
.post(function(req, res){
    city.autocity
});

router.
route('/')
.get((req, res) => {
    res.status(200).send("Welcome 🙌 ");
});


router.get('/forgot-password',(req, res)=>{

})
router.post('/forgot-password',(req, res, next)=>{
    const{email}=req.body;
    res.send(email);


    // make sure user exist in database
    if(email!==User.email){
        res.send("user not registred ");
        return;
    }

})
router.get('/reset-password',(req, res, next)=>{

})
router.post('/reset-password',(req, res, next)=>{

})



// router.get('/autocomplete',(req ,res)=>{


//     var city=req.body;
//     var cityfilter=cityModel.find({name:city},{"name":-1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
//     cityfilter.exec(function(err,data){


//         var result=[];
//         if(!err){
//             if(data && data.length && data.length> 0){

//                 data.forEach(element => {
//                     let obj={
//                         id:user._id,
//                         label:user.name
//                     }
                    
//                 });
//             }
//         }



//     })
    
// })







module.exports = router;