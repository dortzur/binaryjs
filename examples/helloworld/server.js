var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');

// Start Binary.js server
var server = BinaryServer({port: 9000});
// Wait for new user connections
server.on('connection', function(client){
  console.log('New user connected', client.id);
  // Stream a flower as a hello!
  var file = fs.createReadStream(__dirname + '/flower.png');
  client.send(file); 
});

