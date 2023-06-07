const { log } = require("console");
const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', 
    port: '50541',
  })
  //console.logs incomign data
  conn.on("connect", () => {
    stdin.on('data', (data) => {
      console.log(`incoming data: ${data}`)
    });
  });
  conn.on("connect", () => {
    console.log("connection sucesfully establihsed");
    conn.write("Name: Cpt");
    // setTimeout(() => {
    //   conn.write('Move: up');
    //   setTimeout(() => {
    //     conn.write('Move: left');
    //   }, 50);
    // }, 50);;
  })

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect