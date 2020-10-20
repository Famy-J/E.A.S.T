const express = require('express')
const {connection}=require("./Data-Base/database")
const freelancer = require('./Data-Base/freelancer/freelancer')
const PORT = 3000
const app = express()
const clientRouter=require("./ServerRoutes/Client")
const FreelancerRouter=require("./ServerRoutes/FreeLancer")

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));

          /*Routes*/

app.use('/api/clients', clientRouter);
app.use('/api/freeLancers', FreelancerRouter);
        /*Server Connection*/

app.get("*",(req,res)=>{
     res.sendFile(__dirname +"/client/dist/index.html")
   })        
   
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 