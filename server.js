console.log("Starting...");

var port = 3000;

var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(port);
var io = socket(server);

app.use(express.static("public"));

io.on("connection", newConnection);

console.log("Serving at http://localhost:" + port);

function newConnection(socket) {
  console.log("client: \x1b[36m" + socket.id + "\x1b[0m");

  socket.on("mouse", mouseMessage);

  function mouseMessage(receivedData) {
    socket.broadcast.emit("mouseBroadcast", receivedData);
  }
}
