const express = require('express');
const client = require('../Data-Base/client/client');
var router = express.Router();
const Client=require("../Data-Base/client/client")
const jobs = require("../Data-Base/jobs/jobs");
             /*Login Client*/

router.post('/Login', function(req, res, next) {
  if(Object.keys(req.body).length){
    Client.loginClient(req.body,(result,error)=>{
      if(result.userData){
        result.userData.type="client"
          delete result.userData.password
  res.send({Login:true,userData:result.userData})
      }else{
  res.send({Login:false,userData:result.userData})
 }
  })
  }else{
    res.send({Login:false,userData:null})
  }
  });
             /*Signup Client*/

router.post('/Signup', function(req, res, next) {
  console.log(req.body)
if(Object.keys(req.body).length){
  Client.SignupClient(req.body,(result,error)=>{
    if(error){
        if(error.code=="ER_DUP_ENTRY"){
            res.send({Dup:true})
           }else{
             throw error
            //  res.send(error)
           }
      }else{
            res.send({Signup:true})
          }
      })
}else{
  res.send({Signup:false})
}
});

           /*Post Job*/

router.post("/postJob", (req, res) => {
  console.log(req.body);
    if(Object.keys(req.body).length){
      jobs.saveJobs(req.body, (result, error)=>{
        if(result){
          res.send({success: true})
        }else{
          res.send(error)
        }
      })
    }
  });
  
module.exports=router

