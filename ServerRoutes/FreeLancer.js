const express = require('express')
var router = express.Router();
const FreeLancer=require("../Data-Base/freelancer/freelancer")
const application=require("../Data-Base/application/application")
             /*Login FreeLancer*/

router.post('/Login', function(req, res, next) {
console.log(req.body)
 FreeLancer.loginFreeLancer(req.body,(result,error)=>{
     if(result.userData){
        result.userData.type="freelancer"
         delete result.userData.password
 res.send({Login:true,userData:result.userData})
     }else{
 res.send({Login:false,userData:result.userData})
}
 })
  });
             /*Signup FreeLancer*/

router.post('/Signup', function(req, res, next) {
    
    if(Object.keys(req.body).length){
 FreeLancer.SignupFreeLancer(req.body,(result,error)=>{
  if(error){
      if(error.code=="ER_DUP_ENTRY"){
          res.send({Dup:true})
         }
    }else{
          res.send({Signup:true})
        }
    })
}else{
    res.send({Signup:false})
}
});
router.post('/Jobdetail/application', function(req, res, next) { 

 application.Apply(req.body)
});
 
exports.index = function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;
 
	  if (!req.files){
        return res.status(400).send('No files were uploaded.');

      }
 
		var file = req.files.uploaded_image;
		var img_name=file.name;
 
	  	 if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png" ){
                                 
              file.mv('public/images/upload_images/'+file.name, function(err) {
                             
	              if (err)
 
	                return res.status(500).send(err);
      					var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
 
    						var query = db.query(sql, function(err, result) {
    							 res.redirect('profile/'+result.insertId);
    						});
					   });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('index.ejs',{message: message});
          }
   } else {
      res.render('index');
   }
 
};
module.exports=router
//{FisrtName:'alaa',LastName:'lassoued',Email:'d',Password:'0000',Gender:'hello',Age:21,City:'tunis',Adresse:"mg",Field:"designe"}