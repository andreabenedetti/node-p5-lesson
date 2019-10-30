var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(250);

  socket = io();
  socket.on("mouseBroadcast", newDrawing);

  var color = [];

  for (var i; i < 100; i++) {
    
  }
}

function draw() {

}

function mouseDragged() {
  var sendData = {
    x: mouseX,
    y: mouseY
  }

  fill(255);
  ellipse(sendData.x, sendData.y, 20);
  socket.emit("mouse", sendData);
}

function newDrawing(receivedData) {
  fill("teal");
  ellipse(receivedData.x, receivedData.y, 20)
}
