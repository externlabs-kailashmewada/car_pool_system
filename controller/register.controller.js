require("dotenv").config();
//require("../config/database").connection();
const express = require("express");
const users = require("../model/users.js");
const auth = require("../controller/auth.js");
const app= express();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



app.use(express.json());


module.exports.register = async (req, res)=>
 {
    //
    // Get user input.
    // Validate user input.
    // Validate if the user already exists.
    // Encrypt the user password.
    // Create a user in our database.
    // And finally, create a signed JWT token.
    //

    // Our register logic starts here

    console.log("Kailash Mewada");
    try {
        // Get user input
        console.log("Kailash Mewada rajput", req.body);
        const { full_name, email ,password } = req.body
        console.log(full_name)
        //validate user input
        if (!(email && password && full_name )) {
            res.status(400).send("All input is required");
        }
        console.log("Kailash Mewada");

        // check if user already exist
        // Validate if user exist in our database

        const oldUser = await users.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        console.log("kaiash") ;
        
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database

        const user = await users.create({
            full_name,
          
            email: email.toLowerCase(), //  convert email to lowercase
            
            password: encryptedPassword,
        });

        // Create token
        
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }

}


