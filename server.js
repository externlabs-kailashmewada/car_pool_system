require("dotenv").config();
require('./config/database').connection();
const express = require("express");
const path =require('path');

const city=require('./model/cityModel');
const app= express();

app.use(express.json());

const routes = require("./api/routes.js");
const users = require("./model/users");
app.use('/api',routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/my',function(req,res){
    res.render('index');
})


app.get('/autocomplete/',function(req,res,next){
        
        var regex=new RegExp(req.query["term"],'i');
          
        var cityfilter=city.find({name:regex},{'name':1}).sort({'updated_at':-1}).sort({'created_at':-1}).limit(20);
   
        
        cityfilter.exec(function(err,data){
            console.log(data);
            var result=[];
            if(!err){
                if(data && data.length && data.length>0)
                {
                    data.forEach(element => {
                        let obj={
                            id:users._id,
                            label:users.name
                        };
                        result.push(obj);
                        
                    });
                     
                }

                res.jsonp(result);
            }
        })
       

})


app.post('/autocity',async (req, res)=>
 {
   
    try {
        // Get user input
        const { stateName, name } = req.body;

        //validate user input
        if (!(name && stateName )) {
            res.status(400).send("All input is required");
            return
        
        }

       // console.log("Kailash Mewada");
        const cities = await city.create({
            name,
          
            stateName
            

        });

        cities.save()
        .then(item => {
            //res.send("item saved to database");

            })
            .catch(err => {
            res.send("unable to save to database");
            });

    
        res.status(201).json(cities);
        return
    } catch (err) {
        console.log(err);
    }

});




