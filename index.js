
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


var Server = require("http").Server(app);
var io  = require("socket.io")(Server);
Server.listen(3004);


io.on("connection", (socket) => {

 console.log("co nguoi ket noi:" + socket.id);

 socket.on("disconnect", () => {
    console.log(socket.id +"Ngat ket noi!!!");
 })

socket.on("Client-send-data", (data) => {
   console.log(socket.id +" vua gui:" + data);
   // io.sockets.emit("Server-send-data", data+"888");
   //socket.emit("Server-send-data", data+"888");
   socket.broadcast.emit("Server-send-data", data+"888");
});

});


app.get('/', (req, res) => {
    res.render('home');
  })