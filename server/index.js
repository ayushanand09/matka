const express= require("express");
const app = express()
const WebSocket = require("ws");
app.use(express.json())
const {default:mongoose} =require("mongoose")


mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/matka01",{useNewUrlParser:true})
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log(err)})


app.use("/user",require("./routs/userRouts"))
app.use("/transection",require("./routs/transectionRouts"))
app.get("/", (req, res) => {
  const ws = new WebSocket("wss://matka.kasoom.com:9007/matka");


  ws.on("open", () => {
    console.log("WebSocket connection established");
  });

  ws.on("message", (data) => {
    console.log("Received data:", data);
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });

  // Sending response to the client
  res.send("Established");
});

app.listen(3000, () =>
{
  console.log("Listening at 3000");
});