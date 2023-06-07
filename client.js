const { log } = require("console");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //console.logs incomign data
  conn.on("connect", () => {
    console.log("connection sucesfully establihsed");
    conn.write("Name: Cpt");
  });
  
  conn.on('data', (data) => {
    console.log(`incoming data: ${data}`);
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect;