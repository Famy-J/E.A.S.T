const {connection}=require("../database")

const Apply =(req,callback)=>{
    connection.query(`INSERT INTO Applications (PersonID,ApplicationContent) values ('${req.PersonId}','${req.Content}');`, function (error, results, fields) {

    })
}

module.exports={
  Apply
  }
