const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const encoder=bodyParser.urlencoded();
const mysql = require("mysql2");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/assets",express.static("assets"));

const con = mysql.createConnection({
  host: 'souliot.mariadb.database.azure.com',
  user: 'okcliot@souliot',
  password: 'Siva@123',
  database: 'okcldb'

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,function(req,res){
    var username=req.body.username;
    var user_password=req.body.user_password;

con.query("select * from user_data where username=? and user_password=?",[username,user_password],function(err,results,fields){
        if(results.length>0){
        res.redirect("/welcome");
        }
        else{
            res.redirect("/");      
        }
        res.end();
    
    })
})


app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html");
})


app.listen(1200, function() {
  console.log("Server is running on port 1200");
});
