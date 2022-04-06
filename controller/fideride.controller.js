// require("dotenv").config();
// const express = require("express");
// const User = require("../model/users.js");
// const auth = require("../controller/auth.js");
// const app = express();
// const HaversineGeolocation= require('haversine-geolocation');


// module.exports.ride=async (req, res)=>{
    
//         // Get user input
        
//         //const { leaving_from, going_to ,date, NO_passenger } = req.body
//         // if(!(leaving_from && going_to && date && NO_passenger))
//         // {   
//         //     res.status(400).send("All input is required");
            
//         // }
//         // else{

//         //     const RESULT  =ride.find()
//         // }

//         HaversineGeolocation.isGeolocationAvailable()
//     .then(data => {
//         const currentPoint = {
//             latitude: data.coords.latitude,
//             longitude: data.coords.longitude,
//             accuracy: data.coords.accuracy
//         };
//     });

//     const points = [
//         {
//             latitude: 61.5322204,
//             longitude: 28.7515963
//         },
//         {
//             latitude: 51.9971208,
//             longitude: 22.1455439
//         }
//     ];

//     HaversineGeolocation.getDistanceBetween(points[0], points[1]); 
        
//     const locationPoints = [
//         {
//             id: 1,
//             title: 'Point 1',
//             latitude: 61.5322204,
//             longitude: 28.7515963
//         },
//         {
//             id: 2,
//             title: 'Point 2',
//             latitude: 51.9971208,
//             longitude: 22.1455439
//         },
//         {
//             id: 3,
//             title: 'Point 3',
//             latitude: 45.3571207,
//             longitude: 30.3435456
//         }
//     ];

//     HaversineGeolocation.isGeolocationAvailable()
//     .then(data => {
//         const currentPoint = {
//             latitude: data.coords.latitude,
//             longitude: data.coords.longitude,
//             accuracy: data.coords.accuracy
//         };
        
//         HaversineGeolocation.getClosestPosition(
//             currentPoint, 
//             locationPoints,
//             'mi'
//         );
//     });
     
    
        

// }
