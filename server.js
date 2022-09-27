const express = require("express");
const { Server: HTTPServer } = require("http");
const { Server: IOServer } = require("socket.io");
const { addAbortSignal } = require("stream");


const app = express();
const httpServer = new HTTPServer(app);
const io = new IOServer(httpServer);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})



// Puerto 
const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
