const express = require("express");
const app = express();
const mariadb = require("mariadb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mariadb.createPool({
     host: 'souliot.mariadb.database.azure.com', 
     user:'okcliot@souliot', 
     password: 'Siva@123',
     database: 'okcldb',
});

pool.getConnection()
    .then(conn => {
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows);
          return conn.query("SELECT * FROM user_data WHERE username = 'ss' AND user_password = '456123'");
        })
        .then((res) => {
          console.log(res);
          conn.end();
        })
        .catch(err => {
          console.log(err); 
          conn.end();
        })   
    }).catch(err => {
    });

// app.post("/login", function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;
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

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
