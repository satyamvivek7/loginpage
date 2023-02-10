// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
  host: 'souliot.mariadb.database.azure.com',
  user: 'okcliot@souliot',
  password: 'Siva@123',
  database: 'okcldb',
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});