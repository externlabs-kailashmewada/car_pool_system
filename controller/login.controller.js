require("dotenv").config();
//require("../config/database").connection();
const express = require("express");
const User = require("../model/users.js");
const auth = require("../controller/auth.js");
const app = express();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


module.exports.login= async (req, res)=>{

    //     Get user input.
    // Validate user input.
    // Validate if the user exists.
    // Verify user password against the password we saved earlier in our database.
    // And finally, create a signed JWT token.



    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
       
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            var token;
            var isRememberMe=req.body.isRememberMe;
            if (isRememberMe.toLowerCase()==='yes'){
             token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1095d",

                });
                console.log(' remember me')
            }
            else
            {
                 token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
    
                    });
                    console.log('not remember me');
            }

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }

        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
}
