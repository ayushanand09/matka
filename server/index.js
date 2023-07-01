const express= require("express");
const app = express()
const WebSocket = require("ws");
app.use(express.json())


app.get("/user",require("./routs/routs"))
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