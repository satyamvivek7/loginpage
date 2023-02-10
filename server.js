const express = require("express");
const app = express();
const db = require('./db')
const bodyParser=require('body-parser');
const encoder=bodyParser.urlencoded();
const mariadb = require("mariadb");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const pool = mariadb.createPool({
//      host: 'souliot.mariadb.database.azure.com', 
//      user:'okcliot@souliot', 
//      password: 'Siva@123',
//      database: 'okcldb',
// });

// pool.getConnection()
//     .then(conn => {
//       conn.query("SELECT 1 as val")
//         .then((rows) => {
//           console.log(rows);
//           return conn.query("SELECT * FROM user_data WHERE username = 'ss' AND user_password = '456123'");
//         })
//         .then((res) => {
//           console.log(res);
//           conn.end();
//         })
//         .catch(err => {
//           console.log(err); 
//           conn.end();
//         })   
//     }).catch(err => {
//     });
app.use("/assets",express.static("assets"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

// app.post("/", async function (req, res){
//   var username = req.body.username;
//   var user_password = req.body.password;
//   let conn;
//   try {
//     conn = await mariadb.createConnection({
//      host: 'souliot.mariadb.database.azure.com', 
//      user:'okcliot@souliot', 
//      password: 'Siva@123',
//      database: 'okcldb',
//     });

//     const [rows, fields] = await conn.query(
//       'SELECT * FROM user_data WHERE username = ? AND user_password = ?',
//       [username, user_password]
//     );

// app.post("/",encoder,function(req,res){
// var username=req.body.username;
// var user_password=req.body.user_password;
// con.query("select * from user_data where username=? and user_password=?",[username,user_password],
// function(err,results,fields){

//      if(results.length>0){
//         res.redirect("/welcome");
//         }
//         else{
//             res.redirect("/");      
//         }
//         res.end();
//     
//     })
// })

app.post('/', async (req, res) => {
    // let task = req.body;
    var username=req.body.username;
    var user_password=req.body.user_password;
        const result = await db.pool.query("select * from user_data where username=? and user_password=?",[username,user_password],
        function(err,results,fields){
        if(results.length>0){
        res.redirect("/welcome");
        }
        else{
            res.redirect("/");      
        }
        res.end();
    
    })
})

//    catch (err) {
//     console.log(err);
//     return false;
//   } finally {
//     if (conn) return conn.end();
//   }
// }


// checkCredentials('username', 'user_password')
//   .then(result => {
//     if (result) {
//       console.log('Credentials are correct');
//     } else {
//       console.log('Credentials are incorrect');
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
 


app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html");
})
// async function checkCredentials(username, user_password) {
//   let conn;
//   try {
//     conn = await mariadb.createConnection({
    //  host: 'souliot.mariadb.database.azure.com', 
    //  user:'okcliot@souliot', 
    //  password: 'Siva@123',
    //  database: 'okcldb',
//     });

//     const [rows, fields] = await conn.query(
//       'SELECT * FROM user_data WHERE username = ? AND user_password = ?',
//       [username, user_password]
//     );

//     if (rows.length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     console.log(err);
//     return false;
//   } finally {
//     if (conn) return conn.end();
//   }
// }

// checkCredentials('username', 'user_password')
//   .then(result => {
//     if (result) {
//       console.log('Credentials are correct');
//     } else {
//       console.log('Credentials are incorrect');
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });  



//   var query = "SELECT * FROM user_data WHERE username = ? AND user_password = ?";
//   connection.query(query, [username, user_password], function(error, results, fields) {
//     if (error) throw error;
//     if (results.length > 0) {
//       res.send({ status: "success", message: "Login successful" });
//     } else {
//       res.send({ status: "failure", message: "Incorrect username or password" });
//     }
//   });
// });

app.listen(1337, function() {
  console.log("Server is running on port 1337");
});
