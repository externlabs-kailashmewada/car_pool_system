require("dotenv").config();
//require("../config/database").connection();
const express = require("express");
const city = require("../model/cityModel.js");
const auth = require("../controller/auth.js");
//const app = express();
//const bcrypt=require('bcryptjs')
//const jwt=require('jsonwebtoken')

module.exports.autocity=async (req, res)=>
 {
   
    try {
        // Get user input
        const { cityName, stateName } = req.body;

        //validate user input
        if (!(cityName && stateName )) {
            res.status(400).send("All input is required");
            
        
        }
        const cities = await city.create({
            cityName,
          
            stateName 
            

        });

        cities.save()
        .then(item => {
            res.send("item saved to database");
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
            });

    
        res.status(201).json(cities);
    } catch (err) {
        console.log(err);
    }

}

